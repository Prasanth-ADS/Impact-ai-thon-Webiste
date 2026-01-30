import express from 'express';
import { getDb } from '../database';

const router = express.Router();

// Keep the old unlock route if needed, or remove it. 
// User asked to "Change passcode", implying the detailed logic is now client-side or handled here.
// But since we moved password check to client-side, this route might be vestigial.
// We will repurpose/add the winners route.

import crypto from 'crypto';

// Get env vars
const PASSWORD_HASH = process.env.VAULT_PASSWORD_HASH;
const SALT = process.env.VAULT_PASSWORD_SALT || 'ImpactAIThon2026_Salt';
const ITERATIONS = parseInt(process.env.PBKDF2_ITERATIONS || '100000');
const KEYLEN = 64;
const DIGEST = 'sha512';

router.post('/unlock', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ success: false, message: "Code required" });
    }

    try {
        const derivedKey = crypto.pbkdf2Sync(code, SALT, ITERATIONS, KEYLEN, DIGEST);
        const derivedHash = derivedKey.toString('hex');

        if (derivedHash === PASSWORD_HASH) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: "Invalid code" });
        }
    } catch (error) {
        console.error("Hashing error", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// NEW: Winner Registration Route
interface WinnerData {
    name: string;
    team_name: string;
    mobile: string;
    email: string;
    college: string;
}

router.post('/winners', async (req, res) => {
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

// GET route to view winners (Simple Admin View)
router.get('/winners', async (req, res) => {
    try {
        const db = getDb();
        const winners = await db.all('SELECT * FROM winners ORDER BY timestamp DESC');
        res.json({ success: true, count: winners.length, data: winners });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export default router;
