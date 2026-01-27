const crypto = require('crypto');
const fs = require('fs');

const password = '04@07@09';
const salt = 'ImpactAIThon2026_Salt';
const iterations = 100000;
const keylen = 64;
const digest = 'sha512';

crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
    if (err) throw err;
    fs.writeFileSync('hash.txt', derivedKey.toString('hex'));
});
