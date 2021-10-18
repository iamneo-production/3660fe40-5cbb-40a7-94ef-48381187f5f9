import React from "react";
import Card from "../Card/Card";
import Data from "../../Data";
import AdminNavigation from "../NavigationBar/AdminNavigation";
import SearchComponent from "../Utils/SearchComponent";
import "./AdminMovie.css";

// const ncards = (val) => {
// 	return (
// 		<Card
// 			imgsrc={val.imgsrc}
// 			title={val.title}
// 			year={val.year}
// 			hours={val.hours}
// 			minutes={val.minutes}
// 			genres={val.genres}
// 		/>
// 	);
// };

const AdminMovie = () => {
	return (
		<div className="">
			<AdminNavigation />
			<SearchComponent />
			<div className="ncards">{Data.map(Card)}</div>
			<div className="sideform">
				<center>
					<h1>Add Movie</h1>
				</center>
				<form>
					<input
						type="text"
						className="forming"
						placeholder="Title"
					/>
					<input type="text" className="forming" placeholder="Year" />
					<input
						type="text"
						className="forming"
						placeholder="Movie Url"
					/>
					<input
						type="text"
						className="forming"
						placeholder="Image Url"
					/>
					<input
						type="text"
						className="formingtime"
						placeholder="hrs"
					/>
					<input
						type="text"
						className="formingtime"
						placeholder="min"
					/>
					<textarea
						className="cast"
						rows="5"
						cols="0"
						placeholder="Cast"
					></textarea>
					<button className="formsubmit">Add Movie</button>
				</form>
			</div>
		</div>
	);
};

export default AdminMovie;