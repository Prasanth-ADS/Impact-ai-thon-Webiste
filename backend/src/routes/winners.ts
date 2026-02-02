import express from 'express';
import { getDb } from '../database';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

interface WinnerData {
    name: string;
    team_name: string;
    mobile: string;
    email: string;
    college: string;
}

// PROTECTED: Only authenticated sessions can register winners
router.post('/winners', requireAuth, async (req, res) => {
    try {
        const { name, team_name, mobile, email, college } = req.body as WinnerData;

        // Basic Validation
        if (!name || !team_name || !mobile || !email || !college) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const db = getDb();
        await db.run(
            `INSERT INTO winners (name, team_name, mobile, email, college) VALUES (?, ?, ?, ?, ?)`,
            [name, team_name, mobile, email, college]
        );

        res.json({ success: true, message: "Winner registered successfully" });
    } catch (error) {
        console.error("Error saving winner:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// PROTECTED: Only authenticated sessions can view winners
router.get('/winners', requireAuth, async (req, res) => {
    try {
        const db = getDb();
        const winners = await db.all('SELECT * FROM winners ORDER BY timestamp DESC');
        res.json({ success: true, count: winners.length, data: winners });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export default router;
