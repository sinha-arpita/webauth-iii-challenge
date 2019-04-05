import React from "react"
import axios from "axios";
import "../signin/sign.css"
import { withRouter } from 'react-router';

class SignUp extends React.Component{
    state={
       username:"",
       password:"",
       department:""

    }
    changeHandler = event=>{//wth every single key stroke state will be updated
      const {name,value} = event.target;//same as this.setState({[event.target.name]:event.target.value})
      this.setState({[name]:value})
      

    }
    submitHandler=event =>{
     //send a post request with form data

     event.preventDefault();
     console.log("Sign up ....")
     const endpoint ="http://localhost:7070/api/auth/register"
     axios.post(endpoint,this.state)
       .then (res =>{
           console.log("POST Register RESPONSE",res)
           console.log("POST RESPONSE",res.data)
           this.props.history.push('/users')

       }).catch(error =>{
           console.error("this is the error for post register",error)
       })
    }


    render(){

        return(
            <>
               <h2>SIGN UP !!</h2>
               
               <form  className="sign" onSubmit ={this.submitHandler}>
                 <input className="category" type ="text" name ="username" placeholder="username" value={this.state.username}
                   id ="username" onChange ={this.changeHandler}/>
                <input className="category" type ="password" name ="password" placeholder="password" value={this.state.password}
                   id ="password" onChange ={this.changeHandler}/>
                <input className="category" type ="text" name ="department" placeholder="department" value={this.state.department}
                   id ="department" onChange ={this.changeHandler}/>      
                   <div>
                      <button type ="submit">SignUp</button>
                   </div>

               </form>
            </>


        )

    }




}

export default SignUp