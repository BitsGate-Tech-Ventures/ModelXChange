const bcrypt = require("bcryptjs");

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

const compareCode = (code, hashedCode) => {
    if (typeof code !== 'string' || typeof hashedCode !== 'string') {
        throw new Error('Codes must be strings');
    }

    return bcrypt.compare(code, hashedCode);
};

module.exports = {comparePassword, compareCode};