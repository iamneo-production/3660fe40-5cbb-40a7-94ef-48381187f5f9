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
				<Route exact path="/admin" component={AdminHome} />
				<Route path="/admin/movie" component={AdminMovie} />
			</Switch>
		</>
	);
}
export default App;
