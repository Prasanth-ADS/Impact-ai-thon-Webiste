import { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';



const SECRET = process.env.SESSION_SECRET || 'dev_secret';
const VAULT_HASH = process.env.VAULT_HASH_ARGON2;

// ===== RATE LIMITER =====
// In-memory rate limiter (persists across warm invocations)
interface RateLimitEntry {
    attempts: number;
    resetTime: number;
}

// Global map persists across warm lambda invocations
const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW = 20 * 60 * 1000; // 20 minutes in milliseconds
const MAX_ATTEMPTS = 5;

function getRateLimitKey(req: VercelRequest): string {
    // Use X-Forwarded-For for real IP behind Vercel proxy
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded
        ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim())
        : req.socket?.remoteAddress || 'unknown';
    return `ip:${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remainingAttempts: number } {
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    // No previous attempts or window expired
    if (!entry || now > entry.resetTime) {
        rateLimitStore.set(key, {
            attempts: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return { allowed: true, remainingAttempts: MAX_ATTEMPTS - 1 };
    }

    // Within window - check if limit exceeded
    if (entry.attempts >= MAX_ATTEMPTS) {
        return { allowed: false, remainingAttempts: 0 };
    }

    // Increment attempts
    entry.attempts++;
    rateLimitStore.set(key, entry);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS - entry.attempts };
}

// Cleanup old entries periodically (every 100 requests)
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
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    const { allowed, remainingAttempts } = checkRateLimit(rateLimitKey);

    if (!allowed) {
        return res.status(429).json({
            success: false,
            message: 'Too many attempts. Please try again after 15 minutes.'
        });
    }

    cleanupExpiredEntries();

    const { code } = req.body;
    if (!code) return res.status(400).json({ success: false, message: 'Code required' });

    try {
        if (!VAULT_HASH) throw new Error("Missing VAULT_HASH config");

        let isValid = false;

        // Bcrypt Check (Standardized for Vercel)
        isValid = await bcrypt.compare(code, VAULT_HASH);

        if (isValid) {
            const token = jwt.sign({ authenticated: true }, SECRET, { expiresIn: '1d' });

            // Set Cookie
            res.setHeader('Set-Cookie', `auth_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400; ${process.env.NODE_ENV === 'production' ? 'Secure' : ''}`);
            res.status(200).json({ success: true, message: 'Vault unlocked' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid code' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal Error' });
    }
}
