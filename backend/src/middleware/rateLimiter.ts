import rateLimit from 'express-rate-limit';

export const unlockLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per minute
    message: { success: false, error: "Too many attempts. Please try again in 1 minute." },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
