import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import AuthNavigation from "../NavigationBar/AuthNavigation";
import "./SignUp.css";

const SignUp = ({ userDetails, setUserDetails }) => {
	const history = useHistory();
	const [values, setValues] = useState({
		email: "",
		username: "",
		mobileNumber: "",
		password: "",
		role: "user",
		active: false,
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
		event.preventDefault();
		console.log(values);
		axios
			.post(
				"https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/signup",
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				if (response.data) {
					axios
						.get(
							`https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/${values["email"]}`
						)
						.then((response) => {
							setUserDetails(response.data);
						})
						.catch((error) => {
							console.log(error);
						});
					if (response.data) {
						console.log(true);
						history.push("/movie");
					} else {
						alert("Email or password is incorrect");
					}
				} else {
					alert("Email already exists");
				}
			})
			.catch((err) => {
				console.log("Errrror " + err);
			});
	};

	// const validation = (values) => {
	// 	const regex = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";
	// 	if (!values.email || !regex.test(values.email)) {
	// 		errors.email = "re-check email";
	// 	}
	// 	if (!values.Username) {
	// 		errors.Username = "re-check Username";
	// 	}
	// 	if (values.password !== values.confirmpassword) {
	// 		errors.password = "values are not same.re-enter password";
	// 		errors.confirmpassword = "re-enter password";
	// 	}
	// 	var pattern = new RegExp(/^[0-9\b]+$/);
	// 	if (!pattern.test(values.Mobilenumber)) {
	// 		errors.Mobilenumber = "re-check mobile number";
	// 	}
	// 	return errors;
	// };
	const handleForm = (event) => {
		event.preventDefault();
		// setErrors(validation(values));
		onSubmitRegister(event);
	};
	return (
		<div>
			<AuthNavigation />

			<div id="signupBox" className="container signup-container">
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							name="email"
							className="form-control signup-input"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={handleChange}
						/>
						{/* {errors.email && (
							<p className="error">{errors.email}</p>
						)} */}
					</div>
					<br />

					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							className="form-control signup-input"
							id="username"
							placeholder="Enter Username"
							onChange={handleChange}
						/>
						{/* {errors.Username && (
							<p className="error">{errors.Username}</p>
						)} */}
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="mobileNumber">Mobile Number</label>
						<input
							type="text"
							name="mobileNumber"
							className="form-control signup-input"
							id="mobileNumber"
							placeholder="Enter Mobile Number"
							onChange={handleChange}
						/>
						{/* {errors.Mobilenumber && (
							<p className="error">{errors.Mobilenumber}</p>
						)} */}
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							name="password"
							className="form-control signup-input"
							id="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password">Confirm Password</label>
						<input
							type="text"
							className="form-control signup-input"
							id="confirmPassword"
							placeholder="Password"
						/>
						{/* {errors.password && (
							<p className="error">{errors.password}</p>
						)} */}
					</div>
					<br />
					<center>
						<button
							id="submitButton"
							type="submit"
							className="btn btn-primary"
							onClick={handleForm}
						>
							Signup
						</button>
					</center>
				</form>
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
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
