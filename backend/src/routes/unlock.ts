import { Router } from 'express';
import { verifyCode } from '../utils/crypto';
import { unlockLimiter } from '../middleware/rateLimiter';
import { validateUnlockInput } from '../middleware/validateInput';

const router = Router();

router.post('/unlock', unlockLimiter, validateUnlockInput, async (req, res) => {
    try {
        const { code } = req.body;

        const isValid = await verifyCode(code);

        if (isValid) {
            // Return success. In a real app, this might include a session token.
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error("Verification error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default router;
