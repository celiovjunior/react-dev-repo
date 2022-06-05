var bcrypt = require("bcryptjs");

export const createPasswordHash = async (password) => {
    bcrypt.hash(password, 8)
}

