import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


var signInEmail = '';
var signInPassword = '';

const onEmailChange = (event) =>{
    signInEmail = event.target.value
}

const onPasswordChange = (event) =>{
    signInPassword = event.target.value;
}

const onSubmitSignIn = (event) => {
  event.preventDefault(); //to avoid page refresh
  const json = JSON.stringify({ email: signInEmail, password : signInPassword });
  axios.post('https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/login', json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  })
  .then(response => {

    if(response.data){
      console.log(true);
    }else{
      alert("Email or password is incorrect");
    }
  }).catch(err => {
    console.log("Errrror "+err);
  });
  
}

function Login()
{
    return(
        <div className="Login">
        <div className="loginheading">
          Mr.Viewer
        </div>
          <form className="form-outer" onSubmit={onSubmitSignIn} method="post">
            <h2 className="logintext" id="logintext">Login</h2>
            <div className="form-input">
              <input type="text" name="email" id="email" placeholder="Enter email"/>
            </div>
            <div className="form-input">
              <input type="password" name="password" id="password" placeholder="Enter password"/>
            </div>
            <p>New User?</p><NavLink className="signup" to="/SignUp">Sign Up</NavLink>
            <button className="btnlgn">Login</button>
          </form>
      </div>

    );
}
export default Login;