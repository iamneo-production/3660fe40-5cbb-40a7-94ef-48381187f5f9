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
						onMovieSelect(movie.id);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<CoverImage src={movie.imgsrc} alt={movie.title} />

					<div className="container">
						<center>
							<h3>{movie.title}</h3>
							<br />
							<h6>{movie.year}</h6>
							<h6>{movie.genres}</h6>
						</center>
					</div>
				</MovieContainer>
			</div>
		</>
	);
};
export default MovieComponent;
