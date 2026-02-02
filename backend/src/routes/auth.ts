import express from 'express';
import argon2 from 'argon2';
import { loginLimiter } from '../middleware/rateLimit';
import { signToken, verifyToken } from '../utils/jwt';

const router = express.Router();

router.post('/login', loginLimiter, async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ success: false, message: "Code required" });
    }

    try {
        console.log(`[DEBUG] Received login attempt. Code length: ${code.length}`);

        const hash = process.env.VAULT_HASH_ARGON2;
        if (!hash) {
            console.error('[ERROR] VAULT_HASH_ARGON2 is missing');
            return res.status(500).json({ success: false, message: 'Server config error' });
        }

        const isValid = await argon2.verify(hash, code);

        if (isValid) {
            console.log('[DEBUG] Password verified. Generating token...');
            const token = signToken({ authenticated: true });
            console.log('[DEBUG] Token generated. Setting cookie...');

            // Set HttpOnly Cookie
            res.cookie('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // true in prod
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 // 1 day
            });
            console.log('[DEBUG] Cookie set.');

            res.json({ success: true, message: 'Vault unlocked' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid access code' });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/status', (req, res) => {
    const token = req.cookies.auth_token;
    console.log(`[DEBUG] Status check. Token present: ${!!token}`);
    const isValid = token ? verifyToken(token) : false;
    res.json({ authenticated: !!isValid });
});

router.post('/logout', (req, res) => {
    res.clearCookie('auth_token');
    res.json({ success: true, message: 'Logged out' });
});

export default router;
