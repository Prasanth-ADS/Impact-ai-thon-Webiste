import express from 'express';
import argon2 from 'argon2';
import { loginLimiter } from '../middleware/rateLimit';
import { signToken, verifyToken } from '../utils/jwt';

const router = express.Router();

// Actual Logic Refactor:
// We need to support:
// POST /api/unlock (Vercel style)
// GET /api/auth-status (Vercel style)
// POST /login (Legacy)
// GET /status (Legacy)

async function loginLogic(req: express.Request, res: express.Response) {
    const { code } = req.body;
    if (!code) return res.status(400).json({ success: false, message: "Code required" });

    try {
        console.log(`[DEBUG] Received login attempt. Code length: ${code.length}`);
        const hash = process.env.VAULT_HASH_ARGON2;
        if (!hash) return res.status(500).json({ success: false, message: 'Server config error' });

        const isValid = await argon2.verify(hash, code);
        if (isValid) {
            console.log('[DEBUG] Password verified.');
            const token = signToken({ authenticated: true });
            res.cookie('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24
            });
            res.json({ success: true, message: 'Vault unlocked' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid access code' });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

router.post('/', loginLimiter, (req, res, next) => {
    // If mounted on /api/unlock, handle as login
    if (req.baseUrl.endsWith('/unlock')) {
        loginLogic(req, res);
    } else {
        next();
    }
});

router.post('/login', loginLimiter, loginLogic);

router.get('/', (req, res, next) => {
    // If mounted on /api/auth-status, handle as status
    if (req.baseUrl.endsWith('/auth-status')) {
        const token = req.cookies.auth_token;
        const isValid = token ? verifyToken(token) : false;
        res.json({ authenticated: !!isValid });
    } else {
        next();
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
