import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./MovieComponent";
import MovieInfoComponent from "./MovieInfoComponent";
import UserNavigation from "../NavigationBar/UserNavigation";
import MovieList from "../MovieList/MovieList.js";

export const API_KEY = "a9118a3a";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const AppName = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const Header = styled.div`
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	font-size: 25px;
	font-weight: bold;
	background-color: red;
	box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px 10px;
	border-radius: 6px;
	margin-left: 20px;
	width: 50%;
	background-color: white;
`;
const SearchIcon = styled.img`
	width: 32px;
	height: 32px;
`;
const MovieImage = styled.img`
	width: 48px;
	height: 48px;
	margin: 15px;
`;
const SearchInput = styled.input`
	color: black;
	font-size: 16px;
	font-weight: bold;
	border: none;
	outline: none;
	margin-left: 15px;
`;
const MovieListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 30px;
	gap: 25px;
	justify-content: space-evenly; ;
`;
const Placeholder = styled.img`
	width: 120px;
	height: 120px;
	margin: 150px;
	opacity: 50%;
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
					<button id="searchButton" className="searchbtn">search</button>
				</div>
				<div>
					{selectedMovie ? (
						<MovieInfoComponent
							selectedMovie={selectedMovie}
							onMovieSelect={onMovieSelect}
						/>
					) : (
						<MovieListContainer>
							{movieList?.length ? (
								movieList.map((movie, index) => (
									<MovieComponent
										key={index}
										movie={movie}
										index={index}
										onMovieSelect={onMovieSelect}
									/>
								))
							) : (
								<>
									<MovieList />
								</>
							)}
						</MovieListContainer>
					)}
				</div>
			</div>
		</>
	);
}

export default Movie;
