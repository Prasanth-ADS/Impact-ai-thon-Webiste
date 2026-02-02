import jwt from 'jsonwebtoken';

const SECRET = process.env.SESSION_SECRET || 'dev_secret_fallback_DO_NOT_USE_IN_PROD';

export const signToken = (payload: object) => {
    return jwt.sign(payload, SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET);
    } catch (error) {
        return null; // Invalid token
    }
};
