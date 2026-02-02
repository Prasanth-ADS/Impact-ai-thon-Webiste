const bcrypt = require('bcryptjs');
const fs = require('fs');

const password = '04@06!!07@!!0';
const hash = bcrypt.hashSync(password, 10);
console.log('BCRYPT_HASH=' + hash);
fs.writeFileSync('temp_bcrypt_hash.txt', hash);
