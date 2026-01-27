import { Request, Response, NextFunction } from 'express';

export const validateUnlockInput = (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.body;

    if (!code || typeof code !== 'string') {
        return res.status(400).json({ success: false, error: "Invalid input format" });
    }

    // Basic length check to reject obvious spam (assuming code is ~9 chars, allow slightly flexible to not leak exact length too easily if we cared, but strict is fine here)
    if (code.length > 50) {
        return res.status(400).json({ success: false, error: "Input too long" });
    }

    next();
};
