import React from 'react';
import './Login.css';
import {NavLink} from 'react-router-dom';

function Login()
{
    return(
        <div className="Login">
        <div className="heading">
          Mr.Viewer
        </div>
          <form className="form-outer">
            <h2>Login</h2>
            <div className="form-input">
              <input type="text" name="email" id="email" placeholder="Enter email"/>
            </div>
            <div className="form-input">
              <input type="text" name="password" id="password" placeholder="Enter password"/>
            </div>
            <p>New User?</p><NavLink className="signup" to="/SignUp">Sign Up</NavLink>
            <button className="btnlgn">Login</button>
          </form>
      </div>

    );
}
export default Login;