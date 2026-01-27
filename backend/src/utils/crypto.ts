import crypto from 'crypto';

const TARGET_HASH = process.env.ACCESS_CODE_HASH || '';
const SALT = process.env.ACCESS_CODE_SALT || '';
const ITERATIONS = parseInt(process.env.PBKDF2_ITERATIONS || '100000', 10);

if (!TARGET_HASH || !SALT) {
    console.error("FATAL: Missing ACCESS_CODE_HASH or ACCESS_CODE_SALT in .env");
    process.exit(1);
}

/**
 * Verifies the provided code against the stored hash securely.
 * Uses PBKDF2-SHA512 and constant-time comparison.
 * @param code The input code to verify
 * @returns Promise<boolean>
 */
export const verifyCode = (code: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(code, SALT, ITERATIONS, 64, 'sha512', (err, derivedKey) => {
            if (err) return reject(err);

            const derivedHex = derivedKey.toString('hex');
            const targetBuffer = Buffer.from(TARGET_HASH, 'hex');
            const derivedBuffer = Buffer.from(derivedHex, 'hex');

            // Ensure length match to avoid leakage, though normally handled by timingSafeEqual if buffers are same type
            if (targetBuffer.length !== derivedBuffer.length) {
                return resolve(false);
            }

            // Constant-time comparison
            const match = crypto.timingSafeEqual(targetBuffer, derivedBuffer);
            resolve(match);
        });
    });
};
