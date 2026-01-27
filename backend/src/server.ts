import dotenv from 'dotenv';
// Load env vars BEFORE importing other modules that use them
dotenv.config();

import express from 'express';
import cors from 'cors';
import unlockRoutes from './routes/unlock';

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Middleware
app.use(cors()); // Configure origin in production
app.use(express.json());

// Routes
app.use('/api', unlockRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`SECURE BACKEND running on port ${PORT}`);
});
