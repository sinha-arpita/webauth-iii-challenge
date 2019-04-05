import React from "react"
import axios from "axios";
import "./sign.css"
import { withRouter } from 'react-router';


class SignIn extends React.Component{
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
        console.log("here")
        event.preventDefault();
     //send a post request with form data

     const endpoint ="http://localhost:7070/api/auth/login"
     axios.post(endpoint,this.state)
       .then (res =>{
           console.log("POST Register RESPONSE",res)
           console.log("POST RESPONSE",res.data)
           localStorage.setItem('jwt',res.data.token)
           this.props.history.push('/users')

       }).catch(error =>{
           console.error("this is the error for post register",error)
       })
    }


    render(){

        return(
            <>
               <h2>SIGN In !!</h2>
               
               <form class="sign" onSubmit ={this.submitHandler}>
                 <input class="category"  type ="text" name ="username" placeholder="username" value={this.state.username}
                   id ="username" onChange ={this.changeHandler}/>
                <input  class="category"type ="password" name ="password" placeholder="password" value={this.state.password}
                   id ="password" onChange ={this.changeHandler}/>
                <input class="category" type ="text" name ="department" placeholder="department" value={this.state.department}
                   id ="department" onChange ={this.changeHandler}/>      
                   <div>
                      <button type ="submit">SignIn</button>
                   </div>

               </form>
            </>


        )

    }




}

export default SignIn