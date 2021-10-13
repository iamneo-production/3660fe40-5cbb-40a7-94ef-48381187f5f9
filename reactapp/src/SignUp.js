import React from 'react';
import './SignUp.css';
import {NavLink} from 'react-router-dom';
function SignUp()
{
      return(
        <div className="signUp">
          <div className="heading">
            Mr.Viewer
          </div>
            <form className="form-outer">
              <h2>Sign Up</h2>
              <div className="form-input">
                <input type="text" name="email" id="email" placeholder="Enter email"/>
              </div>
              <div className="form-input">
                <input type="text" name="Username" id="Username" placeholder="Enter Username"/>
              </div>
              <div className="form-input">
                <input type="text" name="Mobile number" id="Mobile number" placeholder="Enter Mobile number"/>
              </div>
              <div className="form-input">
                <input type="text" name="password" id="password" placeholder="Enter password"/>
              </div>
              <div className="form-input">
                <input type="text" name="confirm password" id="confirm password" placeholder="Confirm password"/>
              </div>
              <p>Already a User?</p><NavLink className="Login" to="/Login">Login</NavLink>
              <button className="btnsub">Submit</button>
            </form>
        </div>
      );
    
}

export default SignUp;