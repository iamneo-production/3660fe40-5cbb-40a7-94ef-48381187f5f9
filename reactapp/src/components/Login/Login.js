import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AuthNavigation from "../NavigationBar/AuthNavigation";
import "./Login.css";

var signInEmail = "";
var signInPassword = "";

// const onEmailChange = (event) =>{
//     signInEmail = event.target.value
// }

// const onPasswordChange = (event) =>{
//     signInPassword = event.target.value;
// }

const handleLogin = (event) => {
	event.preventDefault(); //to avoid page refresh
	const json = JSON.stringify({
		email: signInEmail,
		password: signInPassword,
	});
	axios
		.post(
			"https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/login",
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
				alert("Email or password is incorrect");
			}
		})
		.catch((err) => {
			console.log("Errrror " + err);
		});
};

const Login = () => {
	return (
		<div>
			<AuthNavigation />
			<div id="loginBox" className="container login-container">
				<center>
					<h1 className="login-heading">Login</h1>
				</center>
				<form>
					<div class="form-group">
						<label for="email">Email address</label>
						<input
							type="email"
							class="form-control login-input"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							class="form-control login-input"
							id="password"
							placeholder="Password"
						/>
					</div>
					<br />
					<center>
						<button
							id="loginButton"
							type="submit"
							class="btn btn-primary"
							onClick={handleLogin}
						>
							Login
						</button>
					</center>
				</form>
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						New User?&nbsp;
						<NavLink id="signupLink" to="/SignUp">
							Sign Up
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
