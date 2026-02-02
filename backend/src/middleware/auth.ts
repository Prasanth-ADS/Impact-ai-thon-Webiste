import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

// Extend Request type
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
    }

    const decoded = verifyToken(token);

    if (decoded) {
        req.user = decoded;
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
};
