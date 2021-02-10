const crypto = require('crypto');
crypto.DEFAULT_ENCODING = 'hex';

let p = 'secret message'
let s = 'salt'
let i = 10000
let k = 512
let d = 'sha512'

crypto.pbkdf2(p, s, i, k, d, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
});
