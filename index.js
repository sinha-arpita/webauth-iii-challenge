
//const db = require("./database/dbConfig.js");
//const Users = require("./users/users-model.js");
const server = require('./api/server.js');
const port = 7070;
server.listen(port, () => {
  console.log(`server is listening at the port:${port}`);
});


// server.get("/", (req, res) => {
//   res.send("its working");
// });

// server.post("/api/register", (req, res) => {
//   let user = req.body;
//   //create a hash password from user's password
//   const hash = bcrypt.hashSync(user.password, 5); //2 to the power of 5... madatort argument

//   //override the user password with hash password
//   user.password = hash;
//   Users.add(user)
//     .then(saved => {
//       res.status(201).json(saved);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });
// function generateToken(user) {
//   const payload = {
//     subject: user.id, //subject in payload is what the token is about
//     username: user.username,
//     department:user.department
//     //any other data that we want to include
//   };
//   const options = {
//     expiresIn: "1d"
//   };
  
//   console.log("Secret", jwtSecret) //jwtSecret is an object,secret should be string ,so consoled it
//   //and found that jwtSecret has a member with the same name jwtsecret as the object containing the secret in form of string 
//   return jwt.sign(payload, jwtSecret.jwtSecret, options);
// }

// server.post("/api/login", (req, res) => {
//   let { username, password } = req.body;

//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       //match the password
//       if (user && bcrypt.compareSync(password, user.password)) {
//         ////produce the token here after  verification ,generatetoken function should give me token
//         const token = generateToken(user);
//         console.log("token", token)
//         res
//           .status(200)
//           .json({  message: `welcome ${user.username},have a token!`,token,department:token.department });
//       } else {
//         console.log("Password did not match")  
//         res.status(400).json({ message: "you can't pass!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });
// function restricted(req, res, next) {//here the server will validate the token,
    
//     const token = req.headers.authorization//here the server got the  token from the client for verification in the header
//      //Do we have a token
//      console.log("DO I GET",req.headers)
//      if(token){
//       //if token exists then check its validity
//        jwt.verify(token,jwtSecret.jwtSecret,(error,decodedToken)=>{
//            if(error){
//                //record the event as token was tempered
//                res.status(400).json({message:"you shall not touch this!"})
//            }else{
//                req.decodedJwt= decodedToken
//                console.log(decodedToken)
//                next();
//            }

//        })
//      }else{
//          res.status(400).json({message:"you shall not pass"})
//      }
   
// }

// function checkDepartment(department){//this function should return a piece of middleware,so it should be a function with homies
//   return function(req,res,next){
//       if(req.decodedJwt.department.includes(department)){
//           next();
//       }else{
//          res.status(403).json({message:"you have no power here!"})
//       }
//   }

// }
// server.get("/api/users", restricted, (req, res) => {
//   Users.findByDepartment(req.decodedJwt.department)
//     .then(users => {
//       res.json({users,decodedToken:req.decodedJwt});
//     })
//     .catch(err => res.send(err));
// });
// const port = 7070;
// server.listen(port, () => {
//   console.log(`server is listening at the port:${port}`);
// });
