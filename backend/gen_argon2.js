const argon2 = require('argon2');
const crypto = require('crypto');

(async () => {
    try {
        const password = '0406@0709';
        const hash = await argon2.hash(password, { type: argon2.argon2id });
        const sessionSecret = crypto.randomBytes(32).toString('hex');

        const fs = require('fs');
        const content = `VAULT_HASH_ARGON2=${hash}\nSESSION_SECRET=${sessionSecret}`;
        fs.writeFileSync('temp_creds.txt', content);
        console.log('Credentials written to temp_creds.txt');
    } catch (err) {
        console.error(err);
    }
})();
