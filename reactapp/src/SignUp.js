import React,{useState} from 'react';
import './SignUp.css';
import {NavLink} from 'react-router-dom';
import validation from './Validation';
function SignUp()
{
      const [values,setValues]=useState({
        email:"",
        Username:"",
        Mobilenumber:"",
        password:"",
        confirmpassword:"",
      });

      const [errors,setErrors]=useState({});

      const handleChange=(event)=>
      {
        setValues({...values,[event.target.name]:event.target.value,});
      };

      const handleForm=(event)=>
      {
        event.preventDefault();
        setErrors(validation(values));
      };
      
      return(
        <div className="signUp">
          <div className="signupheading">
            Mr.Viewer
          </div>
            <form className="form-outer">
              <h2>Sign Up</h2>
              <div className="form-input">
                <input type="text" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Enter email"/>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-input">
                <input type="text" name="Username" id="Username" value={values.Username} onChange={handleChange} placeholder="Enter Username"/>
                {errors.Username && <p className="error">{errors.Username}</p>}
              </div>
              <div className="form-input">
                <input type="text" name="Mobilenumber" id="Mobilenumber" value={values.Mobilenumber} onChange={handleChange} placeholder="Enter Mobile number"/>
                {errors.Mobilenumber && <p className="error">{errors.Mobilenumber}</p>}
              </div>
              <div className="form-input">
                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} placeholder="Enter password"/>
              </div>
              <div className="form-input">
                <input type="password" name="confirmpassword" id="confirmpassword" value={values.word} onChange={handleChange} placeholder="Confirm password"/>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <p>Already a User?</p><NavLink className="Login" to="/Login">Login</NavLink>
              <button className="btnsub" onSubmit={handleForm}>Submit</button>
            </form>
        </div>
      );  
}

export default SignUp;