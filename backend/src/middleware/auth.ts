import { Request, Response, NextFunction } from 'express';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized: Vault access locked' });
    }
};
