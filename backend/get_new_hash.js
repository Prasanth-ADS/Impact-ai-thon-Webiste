const crypto = require('crypto');

const password = '0406@0709';
const salt = 'ImpactAIThon2026_Salt';
const iterations = 100000;
const keylen = 64;
const digest = 'sha512';

crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
    if (err) throw err;
    require('fs').writeFileSync('new_hash.txt', derivedKey.toString('hex'));
});
