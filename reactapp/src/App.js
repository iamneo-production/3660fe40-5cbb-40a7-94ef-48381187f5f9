import React from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AdminMovie from "./components/AdminMovie/AdminMovie";
import AdminHome from "./components/AdminHome/Home.jsx";
import MovieList from "./components/Movie/Movie";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/movie" component={MovieList} />
				<Route path="/admin-movie" component={AdminMovie} />
				<Route path="/admin-home" component={AdminHome} />
			</Switch>
		</>
	);
}
export default App;
