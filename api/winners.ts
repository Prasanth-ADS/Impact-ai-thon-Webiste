import { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js';
import { parse } from 'cookie';

/* 
 * Vercel Serverless Function: /api/winners
 * Protected route - requires valid JWT
 */

const SECRET = process.env.SESSION_SECRET || 'dev_secret';

// Initialize Supabase (Use Environment Variables in Vercel)
const supabaseUrl = process.env.SUPABASE_URL;
// Check both names for the key (Vercel integration often uses SERVICE_ROLE_KEY)
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. Authorization Check
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = cookies.auth_token;

    if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });

    try {
        jwt.verify(token, SECRET);
    } catch {
        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }

    if (!supabase) {
        console.error("Supabase not configured");
        // Fallback for dev without DB
        if (req.method === 'POST') return res.status(200).json({ success: true, message: 'Registered (Mock)' });
        return res.status(200).json({ success: true, data: [] });
    }

    // 2. Database Logic
    if (req.method === 'POST') {
        const { name, team_name, mobile, email, college } = req.body;

        // Validation
        if (!name || !team_name || !mobile || !email || !college) {
            return res.status(400).json({ success: false, message: 'Missing fields' });
        }

        const { error } = await supabase
            .from('winners')
            .insert([{ name, team_name, mobile, email, college }]);

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ success: false, message: 'Database Error' });
        }

        res.status(200).json({ success: true, message: 'Registered' });
    }
    else if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('winners')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            return res.status(500).json({ success: false, message: 'Fetch Error' });
        }

        res.status(200).json({ success: true, data });
    }
    else {
        res.status(405).send('Method Not Allowed');
    }
}
