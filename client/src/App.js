import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import {NavLink,Route} from "react-router-dom";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";
import Users from "./users/Users";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
         <header>
          <nav>
            <NavLink to="/signup">SignUp</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/signin">SignIn</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp; | &nbsp;
            <button onClick ={this.logoutHandler} >Logout</button>


          </nav>
        </header>
        <main>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/users" component={Users} />
          
        </main>
      </>
    );
  }
  logoutHandler= ()=>{

    localStorage.removeItem('jwt');
  }
  
}  
export default App;
