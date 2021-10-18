import React, { useState } from "react";
import Data from "../../Data.js";

const MovieCard = (movie) => {
	return (
		<>
			<div id={`grid${movie.index+1}`} className="col-md-2 card">
				<img src={movie.imgsrc} alt="mypic" className="cardimg" />
				<div className="cardinfo">
					<h3 className="card_title">{movie.title}</h3>
					<h4 className="card_year">{movie.year}</h4>
					<h5 className="card_time">
						{movie.hours}:{movie.minutes}
					</h5>
					<h6 className="card_genre">{movie.genres}</h6>
				</div>
			</div>
		</>
	);
};
const ncards = (val, index) => {
	return (
		<MovieCard
			key={index}
			index={index}
			imgsrc={val.imgsrc}
			title={val.title}
			year={val.year}
			hours={val.hours}
			minutes={val.minutes}
			genres={val.genres}
		/>
	);
};

const MovieList = () => {
	return (
		<>
			<div>
				<div>{Data.map(ncards)}</div>
			</div>
		</>
	);
};

export default MovieList;
