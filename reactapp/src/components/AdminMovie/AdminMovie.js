import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import AdminNavigation from "../NavigationBar/AdminNavigation";
import SearchComponent from "../Utils/SearchComponent";
import "./AdminMovie.css";
import axios from "axios";

const AdminMovie = () => {
	const [movieData, setMovieData] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admmovie"
			)
			.then((response) => {
				setMovieData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const [movieDetails, setMovieDetails] = useState({
		movieName: "",
		movieUrl: "",
		moviePosterUrl: "",
		movieCast: [],
	});
	const handleChange = (event) => {
		if (event.target.name === "cast") {
			setMovieDetails({
				...movieDetails,
				[event.target.name]: event.target.value.split(","),
			});
		} else {
			setMovieDetails({
				...movieDetails,
				[event.target.name]: event.target.value,
			});
		}
	};
	const addMovie = (event) => {
		event.preventDefault();
		axios
			.post(
				"https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/addMovie",
				movieData
			)
			.then((res) => {
				console.log(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<AdminNavigation />
			<SearchComponent />
			<div className="ncards">
				{movieData.map((movie, key) => (
					<Card key={key} index={key} movie={movie} />
				))}
			</div>
			<div className="sideform">
				<center>
					<h1>Add Movie</h1>
				</center>
				<form>
					<input
						type="text"
						className="forming"
						placeholder="Title"
						name="movieName"
						onChange={handleChange}
					/>
					<input type="text" className="forming" placeholder="Year" />
					<input
						type="text"
						className="forming"
						placeholder="Movie Url"
						name="movieUrl"
						onChange={handleChange}
					/>
					<input
						type="text"
						className="forming"
						placeholder="Image Url"
						name="moviePosterUrl"
						onChange={handleChange}
					/>
					<input
						type="text"
						className="formingtime"
						placeholder="hrs"
						// onChange={handleChange}
					/>
					<input
						type="text"
						className="formingtime"
						placeholder="min"
						// onChange={handleChange}
					/>
					<textarea
						className="cast"
						rows="5"
						cols="0"
						placeholder="Cast"
						name="movieCast"
						onChange={handleChange}
					></textarea>
					<button className="formsubmit" onClick={addMovie}>
						Add Movie
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminMovie;
