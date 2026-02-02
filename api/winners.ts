import { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
// import { getDb } from '../../backend/src/database'; // ADAPT for Prod DB

/* 
 * Vercel Serverless Function: /api/winners
 * Protected route - requires valid JWT
 */

const SECRET = process.env.SESSION_SECRET || 'dev_secret';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. Authorization Check
    const cookies = req.headers.cookie ? require('cookie').parse(req.headers.cookie) : {};
    const token = cookies.auth_token;

    if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });

    try {
        jwt.verify(token, SECRET);
    } catch {
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }

    // 2. Logic (DB access would go here)
    if (req.method === 'POST') {
        const { name, team_name } = req.body;
        // Basic validation
        if (!name || !team_name) return res.status(400).json({ success: false });

        // TODO: Insert into Vercel Postgres / Turso / Supabase
        // await db.insert(...) 

        console.log("Winner Registered (Console Mock):", name);
        res.status(200).json({ success: true, message: 'Registered' });
    }
    else if (req.method === 'GET') {
        // TODO: Select from DB
        res.status(200).json({ success: true, data: [] });
    }
    else {
        res.status(405).send('Method Not Allowed');
    }
}
