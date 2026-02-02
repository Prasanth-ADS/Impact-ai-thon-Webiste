import { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

/* 
 * Vercel Serverless Function: /api/unlock
 * Verifies password and sets HttpOnly JWT Cookie
 * NOTE: Uses Bcrypt ONLY for Vercel stability.
 */

const SECRET = process.env.SESSION_SECRET || 'dev_secret';
const VAULT_HASH = process.env.VAULT_HASH_ARGON2;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

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
