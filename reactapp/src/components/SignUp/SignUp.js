import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AuthNavigation from "../NavigationBar/AuthNavigation";
import "./SignUp.css";

const SignUp = () => {
	const [values, setValues] = useState({
		email: "",
		Username: "",
		Mobilenumber: "",
		password: "",
		confirmpassword: "",
	});

	const [errors, setErrors] = useState({
		email: "",
		Username: "",
		Mobilenumber: "",
		password: "",
	});

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const onSubmitRegister = (event) => {
		event.preventDefault(); //to avoid page refresh
		console.log(values);
		const json = JSON.stringify(values);
		axios
			.post(
				"https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/signup",
				json,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				if (response.data) {
					console.log(true);
				} else {
					alert("Email already exists");
				}
			})
			.catch((err) => {
				console.log("Errrror " + err);
			});
	};

	const validation = (values) => {
		const regex = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";
		if (!values.email || !regex.test(values.email)) {
			errors.email = "re-check email";
		}
		if (!values.Username) {
			errors.Username = "re-check Username";
		}
		if (values.password !== values.confirmpassword) {
			errors.password = "values are not same.re-enter password";
			errors.confirmpassword = "re-enter password";
		}
		var pattern = new RegExp(/^[0-9\b]+$/);
		if (!pattern.test(values.Mobilenumber)) {
			errors.Mobilenumber = "re-check mobile number";
		}
		return errors;
	};
	const handleForm = (event) => {
		event.preventDefault();
		setErrors(validation(values));
		onSubmitRegister(event);
	};
	return (
		<div>
			<AuthNavigation />

			<div id="signupBox" className="container signup-container">
				<form>
					<div class="form-group">
						<label for="email">Email address</label>
						<input
							type="email"
							className="form-control signup-input"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={handleChange}
						/>
						{errors.email && (
							<p className="error">{errors.email}</p>
						)}
					</div>
					<br />

					<div class="form-group">
						<label for="username">Username</label>
						<input
							type="text"
							className="form-control signup-input"
							id="username"
							placeholder="Enter Username"
							onChange={handleChange}
						/>
						{errors.Username && (
							<p className="error">{errors.Username}</p>
						)}
					</div>
					<br />
					<div class="form-group">
						<label for="mobileNumber">Mobile Number</label>
						<input
							type="text"
							className="form-control signup-input"
							id="mobileNumber"
							placeholder="Enter Mobile Number"
							onChange={handleChange}
						/>
						{errors.Mobilenumber && (
							<p className="error">{errors.Mobilenumber}</p>
						)}
					</div>
					<br />
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							className="form-control signup-input"
							id="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="password">Confirm Password</label>
						<input
							type="password"
							className="form-control signup-input"
							id="confirmPassword"
							placeholder="Password"
							onChange={handleChange}
						/>
						{errors.password && (
							<p className="error">{errors.password}</p>
						)}
					</div>
					<br />
					<center>
						<button
							id="submitButton"
							type="submit"
							class="btn btn-primary"
							onClick={handleForm}
						>
							Signup
						</button>
					</center>
				</form>
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Already a User?&nbsp;
						<NavLink id="signinLink" to="/Login">
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
