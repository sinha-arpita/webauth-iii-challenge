const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/users", restricted, (req, res) => {
  console.log(req.decodedJwt.department);
  Users.findByDepartment(req.decodedJwt.department)
    .then(users => {
      console.log("Users ", users);
      res.json({ users });
    })
    .catch(err => res.send(err));
});

module.exports = router;
