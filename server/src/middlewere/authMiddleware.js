const { verifyToken } = require("../utils/genrateToken");

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(403).send("Token is missing");
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).send("Invalid or expired token");
  }

  req.user = decoded; 
  next();
};

module.exports = authenticateToken;
