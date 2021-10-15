import React from 'react';
import './SignUp.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


const  details ={
  email : "",
  password: "",
  username: "",
  mobileNumber:"",
  active:false,
  role:"user"
}

const onDetailsChange = (event) => {
    details[event.target.name] = event.target.value;
}

const onSubmitRegister = (event) => {
  event.preventDefault(); //to avoid page refresh
  console.log(details);
  const json = JSON.stringify(details);
  axios.post('https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/signup', json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(response.data){
      console.log(true);
    }else{
      alert("Email already exists");
    }
  }).catch(err => {
    console.log("Errrror "+err);
  });
}

const SignUp = () =>{

      return(
        <div className="signUp">
          <div className="heading">
            Mr.Viewer
          </div>
            <form className="form-outer" onSubmit = {onSubmitRegister} method="post" >
              <h2>Sign Up</h2>
              <div className="form-input">
                <input type="email" name="email" id="email" placeholder="Enter email" onChange = { onDetailsChange }/>
              </div>
              <div className="form-input">
                <input type="text" name="username" id="username" placeholder="Enter Username" onChange = { onDetailsChange }/>
              </div>
              <div className="form-input">
                <input type="text" name="mobileNumber" id="mobileNumber" placeholder="Enter Mobile number" onChange = { onDetailsChange }/>
              </div>
              <div className="form-input">
                <input type="password" name="password" id="password" placeholder="Password" onChange = { onDetailsChange }/>
              </div>
              <div className="form-input">
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password"/>
              </div>
              <p>Already a User?</p><NavLink className="Login" to="/Login">Login</NavLink>
              <button className="btnsub">Submit</button>
            </form>
        </div>
      );
    
}

export default SignUp;