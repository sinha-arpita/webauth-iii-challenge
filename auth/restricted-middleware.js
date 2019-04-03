const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const { jwtSecret } = require('../config/secret.js');

module.exports = (req, res, next) => {
// check for a valid web token
// make sure the user is authorized to see this endpoint
const token = req.headers.authorization;

if (token) {
  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ err: 'user not verified'})
    } else {
      console.log('token confirmed', decodedToken)
      req.decodedJwt = decodedToken;
      next();
    }
  });
} else {
  res.status(401).json({ err: 'user not verified'});
}
};

