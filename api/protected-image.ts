import { VercelRequest, VercelResponse } from '@vercel/node';
import { readFile } from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';

/* 
 * Vercel Serverless Function: /api/protected-image
 * Serves protected images with authentication and rate limiting
 * Images must be stored in /protected-assets/images/
 */

const SECRET = process.env.SESSION_SECRET || 'dev_secret';

// ===== RATE LIMITER =====
interface RateLimitEntry {
    attempts: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 20; // Higher limit for image loading (multiple images per page)

function getRateLimitKey(req: VercelRequest): string {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded
        ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim())
        : 'unknown';
    return `img:${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remainingAttempts: number } {
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    if (!entry || now > entry.resetTime) {
        rateLimitStore.set(key, {
            attempts: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return { allowed: true, remainingAttempts: MAX_ATTEMPTS - 1 };
    }

    if (entry.attempts >= MAX_ATTEMPTS) {
        return { allowed: false, remainingAttempts: 0 };
    }

    entry.attempts++;
    rateLimitStore.set(key, entry);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS - entry.attempts };
}

// Cleanup old entries periodically
let cleanupCounter = 0;
function cleanupExpiredEntries() {
    if (++cleanupCounter % 100 === 0) {
        const now = Date.now();
        for (const [key, entry] of rateLimitStore.entries()) {
            if (now > entry.resetTime) {
                rateLimitStore.delete(key);
            }
        }
    }
}

// ===== HANDLER =====
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    const { allowed } = checkRateLimit(rateLimitKey);

    if (!allowed) {
        return res.status(429).json({
            error: 'Too many requests. Please try again after 15 minutes.'
        });
    }

    cleanupExpiredEntries();

    // Authentication check
    const cookies = req.headers.cookie || '';
    const authToken = cookies.split(';')
        .find(c => c.trim().startsWith('auth_token='))
        ?.split('=')[1];

    if (!authToken) {
        return res.status(401).json({ error: 'Unauthorized - Authentication required' });
    }

    // Verify JWT token
    try {
        jwt.verify(authToken, SECRET);
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized - Invalid or expired token' });
    }

    // Get and validate filename
    const filename = req.query.file as string;

    if (!filename) {
        return res.status(400).json({ error: 'Missing file parameter' });
    }

    // Sanitize filename (prevent path traversal)
    const safeFilename = path.basename(filename);

    // Validate file extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const fileExtension = path.extname(safeFilename).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
        return res.status(400).json({ error: 'Invalid file type' });
    }

    // Construct safe file path
    const filePath = path.join(process.cwd(), 'protected-assets', 'images', safeFilename);

    try {
        // Read the file
        const fileBuffer = await readFile(filePath);

        // Content type mapping
        const contentTypeMap: Record<string, string> = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
        };

        // Serve the file
        res.setHeader('Content-Type', contentTypeMap[fileExtension] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'private, max-age=3600'); // Cache for 1 hour
        res.setHeader('X-Content-Type-Options', 'nosniff');

        return res.status(200).send(fileBuffer);
    } catch (error) {
        console.error('File access error:', error);
        return res.status(404).json({ error: 'File not found' });
    }
}
