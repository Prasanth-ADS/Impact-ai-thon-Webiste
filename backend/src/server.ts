import dotenv from 'dotenv';
// Load env vars BEFORE importing other modules that use them
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import winnerRoutes from './routes/winners';

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Middleware
app.use(cors({
    origin: true, // Allow all origins for now (adjust for prod)
    credentials: true // Allow cookies
}));
app.use(express.json());
app.use(cookieParser());
// Session removed for stateless JWT architecture (Vercel compatible)

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', winnerRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Start Server
import { initDb } from './database';

initDb().then(() => {
    app.listen(PORT, () => {
        console.log(`SECURE BACKEND running on port ${PORT}`);
        console.log(`[DEBUG] Vault Hash Loaded: ${process.env.VAULT_HASH_ARGON2 ? 'YES' : 'NO'}`);
    });
}).catch(err => {
    console.error("Failed to start server due to DB init usage", err);
});
