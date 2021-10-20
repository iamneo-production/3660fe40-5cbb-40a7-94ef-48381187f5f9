import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import AuthNavigation from "../NavigationBar/AuthNavigation";
import "./Login.css";

const Login = ({ userDetails, setUserDetails }) => {
	const history = useHistory();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});
	const handleChange = (event) =>
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	const handleLogin = (event) => {
		event.preventDefault();
		console.log(loginData);
		axios
			.post(
				"https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/login",
				loginData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				axios
					.get(
						`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/${loginData["email"]}`
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
			})
			.catch((err) => {
				console.log("Errrror " + err);
			});
	};
	return (
		<>
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
							name="email"
							placeholder="Enter email"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							class="form-control login-input"
							id="password"
							name="password"
							placeholder="Password"
							onChange={handleChange}
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
		</>
	);
};
export default Login;
