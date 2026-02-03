import { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

const SECRET = process.env.SESSION_SECRET || 'dev_secret';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = cookies.auth_token;

    if (!token) {
        return res.status(200).json({ authenticated: false });
    }

    try {
        jwt.verify(token, SECRET);
        res.status(200).json({ authenticated: true });
    } catch (err) {
        res.status(200).json({ authenticated: false });
    }
}
