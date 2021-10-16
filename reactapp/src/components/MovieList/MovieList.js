import React from "react";
import Card from "../Card/Card";
import Data from "../Data.js";
import "./MovieList.css";
const ncards = (val) => {
	return (
		<Card
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
		<div className="">
			<div className="mainitem">
				<div className="ncards">{Data.map(ncards)}</div>
			</div>
		</div>
	);
};

export default MovieList;
