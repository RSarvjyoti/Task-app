var jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.secretKey;

const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    console.error("Invalid Token:", err.message);
    return null;
  }
};

module.exports = {generateToken, verifyToken};