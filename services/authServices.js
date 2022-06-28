const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const secret_key = process.env.SECRET_KEY;

module.exports.createToken = (user) =>{
    return jwt.sign(user , secret_key , {
        expiresIn : " 7d"
    })
}

module.exports.hashPassword = async(password) =>{
    const hashed = await bcrypt.hash(password, 10)
    return hashed;
};

module.exports.comparePassword = async(password , dbpassword) => {
    return await bcrypt.compare(password , dbpassword)
};