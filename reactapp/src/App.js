import React, { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AdminMovie from "./components/AdminMovie/AdminMovie";
import AdminHome from "./components/AdminHome/Home.jsx";
import MovieList from "./components/Movie/Movie";
import MovieInfoComponent from "./components/Movie/MovieInfoComponent";
import { Route, Switch } from "react-router-dom";

function App({ userDetails, setUserDetails }) {
	return (
		<>
			<Switch>
				<Route exact path="/login">
					<Login
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
				<Route exact path="/signup">
					<SignUp
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
				<Route exact path="/movie">
					<MovieList
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
				<Route exact path="/admin">
					<AdminHome
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
				<Route exact path="/admin/movie">
					<AdminMovie
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
				<Route exact path="/movie/:id">
					<MovieInfoComponent
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				</Route>
			</Switch>
		</>
	);
}
export default App;
