require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiter: Max 5 attempts per minute per IP to prevent brute-force
const unlockLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: { success: false, error: "Too many attempts. Please wait 1 minute." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Secrets from .env
const TARGET_HASH = process.env.ACCESS_CODE_HASH;
const SALT = process.env.ACCESS_CODE_SALT;
const ITERATIONS = parseInt(process.env.PBKDF2_ITERATIONS || '100000', 10);

if (!TARGET_HASH || !SALT) {
    console.error("FATAL: Missing ACCESS_CODE_HASH or ACCESS_CODE_SALT in .env");
    process.exit(1);
}

// Verification Endpoint
app.post('/api/unlock', unlockLimiter, (req, res) => {
    const { code } = req.body;

    if (!code || typeof code !== 'string') {
        return res.status(400).json({ success: false, error: "Invalid input" });
    }

    // Verify using PBKDF2-SHA512
    crypto.pbkdf2(code, SALT, ITERATIONS, 64, 'sha512', (err, derivedKey) => {
        if (err) {
            console.error("Crypto error:", err);
            return res.status(500).json({ success: false, error: "Internal server error" });
        }

        const derivedHex = derivedKey.toString('hex');

        // Constant-time comparison to prevent timing attacks
        // We compare buffers, so we need to ensure lengths match or handle it carefully
        // Since we control generation, lengths should match 64 bytes (128 hex chars)

        const targetBuffer = Buffer.from(TARGET_HASH, 'hex');
        const derivedBuffer = Buffer.from(derivedHex, 'hex');

        if (targetBuffer.length !== derivedBuffer.length) {
            // Length mismatch means definitely wrong, but we return generic failure
            return res.json({ success: false });
        }

        const match = crypto.timingSafeEqual(targetBuffer, derivedBuffer);

        if (match) {
            return res.json({ success: true, token: "ACCESS_GRANTED_SESSION_TOKEN_MOCK" });
        } else {
            return res.json({ success: false });
        }
    });
});

app.listen(PORT, () => {
    console.log(`SECURE BACKEND running on port ${PORT}`);
});
