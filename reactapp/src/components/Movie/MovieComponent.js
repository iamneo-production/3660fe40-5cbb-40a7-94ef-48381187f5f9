import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 280px;
	box-shadow: 0 3px 10px 0 #aaa;
	cursor: pointer;
`;
const CoverImage = styled.img`
	object-fit: cover;
	height: 362px;
`;

const MovieComponent = ({ movie, index, onMovieSelect }) => {
	return (
		<>
			<div id={`grid${index + 1}`}>
				<MovieContainer
					onClick={() => {
						onMovieSelect(movie.movieId);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<CoverImage src={movie.moviePosterUrl} alt={movie.movieName} />

					<div className="container">
						<center>
							<h3>{movie.movieName}</h3>
							<br />
							<h6>{movie.yearOfRelease}</h6>
							<h6>{movie.movieCast}</h6>
						</center>
					</div>
				</MovieContainer>
			</div>
		</>
	);
};
export default MovieComponent;
