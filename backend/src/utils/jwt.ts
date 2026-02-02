import jwt from 'jsonwebtoken';

const SECRET = process.env.SESSION_SECRET || 'dev_secret_fallback_DO_NOT_USE_IN_PROD';
console.log(`[DEBUG] JWT Secret Loaded: ${process.env.SESSION_SECRET ? 'YES' : 'NO (Using Fallback)'}`);

export const signToken = (payload: object) => {
    console.log('[DEBUG] Signing JWT');
    return jwt.sign(payload, SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET);
    } catch (error: any) {
        console.error('[DEBUG] JWT Verify Failed:', error.message);
        return null; // Invalid token
    }
};
