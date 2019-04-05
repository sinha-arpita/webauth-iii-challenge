import React from "react"
import axios from "axios";

class Users extends React.Component{
    state={
         users:[]

    };
    render(){
        return(
            <>
            <ul>
                 {
                     this.state.users.map(user=>{
                         return(
                             <li key= {user.id}>{user.username}</li>
                         )
                    })
                 }
            </ul>
            
            </>
        )
    }
    componentDidMount(){
        console.log("USERS are here")
        //question is why are we not seeing the list of users, 
        //why are we unauthorized?its because token is not on the authrization key of the header
        //and also since we have not logged in ,we don't have a token, 
        //server is specifically looking for a valid token in the header on the authoriazation key
        // we will not be ble to hit this endpoint unless we have  a valid token  in tghe header on the auth key. 
        //Till now we
        //If there would be a token where could we find it?..on localstorage
        const headers = {authorization:localStorage.getItem('jwt')}//json web token
        const endpoint="http://localhost:7070/api/users";
        //axios.get takes an  second optional parametercalled options where we can put our headers object
        axios.get(endpoint,{headers})
        
        .then(res =>{
            console.log("GET RESPONSE",res)
            this.setState({users:res.data})
        })
        .catch(err=>{
            console.error(err);
        })


    }

}

export default Users

