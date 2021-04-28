const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../env');

function validateToken(req, res, next) {
  const authHeader = req.headers['Authorization'];
  const token = authHeader && authHeader.slice(7);
  if (!token) {
    return res.status(401).send('Access Token Required');
  }
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).send('Invalid Access token');
    }
    req.user = decoded;
    next();
  });
}
module.exports = { validateToken };
