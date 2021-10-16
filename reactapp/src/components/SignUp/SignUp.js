import React, {useState} from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const [values, setValues] = useState({
		email: "",
		Username: "",
		Mobilenumber: "",
		password: "",
		confirmpassword: "",
	});

	const [errors, setErrors] = useState({});

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
		let errors = {};
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
		<div className="signUp">
			<div className="heading">Mr.Viewer</div>
			<form
				className="form-outer"
				onSubmit={onSubmitRegister}
				method="post"
			>
				<h2>Sign Up</h2>
				<div className="form-input">
					<input
						type="text"
						name="email"
						id="email"
						value={values.email}
						onChange={handleChange}
						placeholder="Enter email"
					/>
					{errors.email && <p className="error">{errors.email}</p>}
				</div>
				<div className="form-input">
					<input
						type="text"
						name="Username"
						id="Username"
						value={values.Username}
						onChange={handleChange}
						placeholder="Enter Username"
					/>
					{errors.Username && (
						<p className="error">{errors.Username}</p>
					)}
				</div>
				<div className="form-input">
					<input
						type="text"
						name="Mobilenumber"
						id="Mobilenumber"
						value={values.Mobilenumber}
						onChange={handleChange}
						placeholder="Enter Mobile number"
					/>
					{errors.Mobilenumber && (
						<p className="error">{errors.Mobilenumber}</p>
					)}
				</div>
				<div className="form-input">
					<input
						type="password"
						name="password"
						id="password"
						value={values.password}
						onChange={handleChange}
						placeholder="Enter password"
					/>
				</div>
				<div className="form-input">
					<input
						type="password"
						name="confirmpassword"
						id="confirmpassword"
						value={values.word}
						onChange={handleChange}
						placeholder="Confirm password"
					/>
					{errors.password && (
						<p className="error">{errors.password}</p>
					)}
				</div>
				<p>Already a User?</p>
				<NavLink className="Login" to="/Login">
					Login
				</NavLink>
				<button className="btnsub" onSubmit={handleForm}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignUp;
