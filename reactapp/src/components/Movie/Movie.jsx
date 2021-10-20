import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./MovieComponent";
import MovieInfoComponent from "./MovieInfoComponent";
import UserNavigation from "../NavigationBar/UserNavigation";
import MovieList from "../MovieList/MovieList.js";
import Data from "../../Data.js";
import { Link } from "react-router-dom";

export const API_KEY = "a9118a3a";

const MovieListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 30px;
	gap: 25px;
	justify-content: space-evenly; ;
`;

function Movie() {
	const [searchQuery, updateSearchQuery] = useState("");

	const [movieList, updateMovieList] = useState([]);
	const [selectedMovie, onMovieSelect] = useState();

	const [timeoutId, updateTimeoutId] = useState();

	const fetchData = async (searchString) => {
		const response = await Axios.get(
			`https://www.omdbapi.com/?s=${searchString.trim()}&apikey=${API_KEY}`
		);
		updateMovieList(response.data.Search);
	};

	const onTextChange = (e) => {
		onMovieSelect("");
		clearTimeout(timeoutId);
		updateSearchQuery(e.target.value);
		const timeout = setTimeout(() => fetchData(e.target.value), 500);
		updateTimeoutId(timeout);
	};
	return (
		<>
			<UserNavigation />
			<div id="userHomePage">
				<div className="search">
					<input
						className="typing"
						type="text"
						id="searchBox"
						placeholder="Type here to search"
						value={searchQuery}
						onChange={onTextChange}
					/>
					<button id="searchButton" className="searchbtn">
						search
					</button>
				</div>
				<div>
					<MovieListContainer>
						{Data.map((movie, index) => (
							<Link
								to={`/movie/${movie.id}`}
								style={{
									textDecoration: "none",
									color: "black",
								}}
							>
								<MovieComponent
									key={index}
									movie={movie}
									index={index}
									onMovieSelect={onMovieSelect}
								/>
							</Link>
						))}
					</MovieListContainer>
				</div>
			</div>
		</>
	);
}

export default Movie;
