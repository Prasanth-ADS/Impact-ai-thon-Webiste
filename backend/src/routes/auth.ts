import express from 'express';
import argon2 from 'argon2';
import { loginLimiter } from '../middleware/rateLimit';

const router = express.Router();

router.post('/login', loginLimiter, async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ success: false, message: "Code required" });
    }

    try {
        console.log(`[DEBUG] Received login attempt. Code: ${code} (Length: ${code.length})`);

        const hash = process.env.VAULT_HASH_ARGON2;
        if (!hash) {
            console.error('[ERROR] VAULT_HASH_ARGON2 is missing from env');
            return res.status(500).json({ success: false, message: 'Server configuration error' });
        }

        const isValid = await argon2.verify(hash, code);
        console.log(`[DEBUG] Verification result: ${isValid}`);

        if (isValid) {
            req.session.isAuthenticated = true;
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
    res.json({ authenticated: !!req.session.isAuthenticated });
});

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Could not log out' });
        }
        res.clearCookie('connect.sid');
        res.json({ success: true, message: 'Logged out' });
    });
});

export default router;
