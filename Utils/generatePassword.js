const crypto = require('crypto');

function generateRandomPassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

//   Optional: Hash the password for extra security.
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
 
  return hashedPassword;
}

module.exports = generateRandomPassword