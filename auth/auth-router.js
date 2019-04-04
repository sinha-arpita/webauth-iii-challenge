const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const jwtSecret = require("../config/secret.js").jwtSecret;
// could also descruct it
// const { jwtSecret  }= require('../config/secrets');

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  //in a real app we would like to sign a token on register
  //create a hash password from user's password
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  //override the user password with hash password
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user);
        console.log("token", token)
        res.status(200).json({
          token,
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };

  // const secret = 'shhhhdonttellanyone';
  console.log("Secret", jwtSecret) //jwtSecret is an object,secret should be string ,so consoled it
  //and found that jwtSecret has a member with the same name jwtsecret as the object containing the secret in form of string 
 //const jwtSecret = require("../config/secrets").jwtSecret;if I don't do .jwsecret then its object and to access it 
 //everywhere I need to put JwtSecret.jwtSecret; object name and inside the object string name is same
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;

//localhost:7070/api/auth/register
