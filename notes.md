JWT site  for tokens, company name is :auth0

we have to selsct yhe library as node.js


Everything that is transferred on the htttp is a string, so wea re transferring string,jsontoken is astring that is separated by dot,3 parts of the styring in different colors
the three parts are :1)header:{//header has algorithm and data type, this part is information about ythe token
	  alg:'h453'
	  typ:'jwt'
} 



2)payload :{//main data
	"subject":"user.id",//allthe data will be inside the token// added by library
	"name":"username"//added manually,
	"iat:date"//issued a.... added by library


}

 and 3)signature: this part is basically verified by the server whether the token is valid or not on the client as we never trust client,based on the header and the payload the server that knows the secret , server generates the third string that is added to the token 



The main difference between Session and Token  regarding authentication is that.... who is responsible to keep the state.
   Where the state is kept.

   In Sessions: state is kept in the server

   In Token :state is kept in the Token (client).so client is responsible to hold the state .The client is to hold down to the state.That creates a lot of difference because the client is now responsible to send back the state  to the client each time  on every request.This use to happen automatically in cookies.In token we have to manually do that.


   Responsibilities:Who does what:


   THE SERVER: 1)server produces the token.
               2)send the token to the client

               3)on each upcoming request server has to  read,decode and verify the token
               4)make the payload available for the rest of the api// so say if the pay load is in some kind of middleware then it is responsible for work from 3-4



THE CLIENT :   1)Store the token 
               2) If the token exsists then send the token on every request  to make sure you establish an identity with the server

               3)   destroys the token on logout,make sure nobody else is using after logout           

We will be using jsonwebtoken library.(npmjs.com)
index.js is bein g renamed as sessions.js and a new index.js ois creatyed where all of the content of previous index.js is copied.
take out asll the session items from this file. server is running and in postman get users is working

Add the library:yarn addf jsonwebtoken
const jwt =require('jsonwebtoken')


First step:  Produce the token:

line no.45 we will produce the token ufter username and password validation

const token = generateToken(user)// pass the user into it and in the response along with messaghe we have to pass the token also.
res.status(200).json({message:`welcome  ${user},here is your cookie`,token})

so,we need a: function generateToken(user){
	    const payload={
	       subject: user.id, //what the token is about
	       username:user.username//and also we can include any other data that we want to include
       

	    }
	    constb options={
         expiresIn:'1d'//1 day or hours/2days

	    }

	    const secret="Make this secret and safe";//it will be on the top

	    return jwt.sign(payload,secret , options)//signature  of sign method of jwt
}.  

************   common token types

1)auth token: establish identity,  you login and you are telling who you are
2)access/authorization token:3rd paty google facebook , you get to another site requesting for resourses but for 10 minutes only , the trust google as google issues token to ,these sites about  the user,you trust gthis and hence go for issuing refresh tokens

2)refresh token:my token expires in every 10 minutes ... bank , but tgis is longlived 


****************** verify token *****************

function restricted{
	  xonst token 


}

jwtid:related to the blacklist and whitelist of tokens ; initially it ok to do blacklist of compromised token at one place because their number will be less.Later on it can change



previous assignment stretch might be helpful:if you're still having problem. try this in client global:import axios from 'axios';
axios.defaults.withCredentials = true;


a session follows a user around every request,sessions keep a record of who is logged in, and cookies are how you keep track of each logged in use
scalability with session is a problem because we store the session on the server and if too many users are added, it might require a dedicated database
