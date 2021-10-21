import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import AuthNavigation from "../NavigationBar/AuthNavigation";
import "./Login.css";

const Login = ({ userDetails, setUserDetails }) => {
	console.log(userDetails)
	const history = useHistory();
	history.push("/login");
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
				"https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/login",
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
						`https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/${loginData["email"]}`
					)
					.then((response) => {
						setUserDetails(response.data);
						if (userDetails["role"] === "user"){
							history.push("/movie");
						}
						else if (userDetails["role"] === "admin"){
							console.log("nice");
							history.push("/admin")
						}
					})
					.catch((error) => {
						console.log(error);
					});
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
	return (
		<>
			<AuthNavigation />
			<div id="loginBox" className="container login-container">
				<center>
					<h1 className="login-heading">Login</h1>
				</center>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							className="form-control login-input"
							id="email"
							name="email"
							placeholder="Enter email"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control login-input"
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
							className="btn btn-primary"
							onClick={handleLogin}
						>
							Login
						</button>
					</center>
				</form>
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
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
