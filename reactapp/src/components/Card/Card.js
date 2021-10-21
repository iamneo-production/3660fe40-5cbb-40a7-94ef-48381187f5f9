import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Card.css";
import axios from "axios";

const EditMovieDetails = (props) => {
	const [updatedMovieDetails, setUpdatedMovieDetails] = useState({
		movieName: props.movie.movieName,
		movieUrl: props.movie.movieUrl,
		moviePosterUrl: props.movie.moviePosterUrl,
		yearOfRelease: props.movie.yearOfRelease,
		movieCast: props.movie.movieCast,
		duration: props.movie.duration,
	});
	const handleChange = (event) => {
		if (event.target.name === "movieCast") {
			setUpdatedMovieDetails({
				...updatedMovieDetails,
				[event.target.name]: event.target.value.split(","),
			});
		} else {
			setUpdatedMovieDetails({
				...updatedMovieDetails,
				[event.target.name]: event.target.value,
			});
		}
	};
	const updateMovieDetails = (event) => {
		// event.preventDefault();
		console.log(updatedMovieDetails);

		axios
			.put(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/movie/${props.movie.movieId}`,
				updatedMovieDetails
			)
			.then(() => {
				console.log(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Modal {...props} size="lg" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<center>
							<h1>Update Movie Details</h1>
						</center>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-group row">
							<label
								htmlFor="title"
								className="col-sm-2 col-form-label"
							>
								Title
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="title"
									name="movieName"
									defaultValue={props.movie.movieName}
									onChange={handleChange}
								/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label
								htmlFor="imgsrc"
								className="col-sm-2 col-form-label"
							>
								Image Link
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="imgsrc"
									name="moviePosterUrl"
									defaultValue={props.movie.moviePosterUrl}
									onChange={handleChange}
								/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label
								htmlFor="movieurl"
								className="col-sm-2 col-form-label"
							>
								Movie Link
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="movieurl"
									name="movieUrl"
									defaultValue={props.movie.movieUrl}
									onChange={handleChange}
								/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<div className="form-group row">
								<label
									htmlFor="inputValue"
									className="col-md-2 control-label"
								>
									Year of Release
								</label>
								<div className="col-md-2">
									<input
										type="text"
										className="form-control"
										id="inputValue"
										name="yearOfRelease"
										defaultValue={props.movie.yearOfRelease}
										onChange={handleChange}
									/>
								</div>
								{/* <label
									htmlFor="inputKey"
									className="col-md-1 col-form-label"
								>
									Hours
								</label> */}
								{/* <div className="col-md-2">
									<input
										type="text"
										className="form-control"
										id="inputKey"
										defaultValue={props.movie.hours}
										onChange={handleChange}
									/>
								</div> */}
								<label
									htmlFor="inputValue"
									className="col-md-1 col-form-label"
								>
									Minutes
								</label>
								<div className="col-md-2">
									<input
										type="text"
										className="form-control"
										id="inputValue"
										name="duration"
										defaultValue={props.movie.duration}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label
								className="col-sm-2 col-form-label"
								htmlFor="cast"
							>
								Cast
							</label>
							<div className="col-sm-10">
								<textarea
									className="form-control"
									id="cast"
									rows="5"
									name="movieCast"
									defaultValue={props.movie.movieCast}
									onChange={handleChange}
								></textarea>
							</div>
						</div>
						<br />
						<center>
							<button
								className="btn btn-primary"
								id="updateButton"
								onClick={updateMovieDetails}
							>
								Update
							</button>
							&nbsp;&nbsp;&nbsp;
							<button
								className="btn btn-danger"
								onClick={props.onHide}
							>
								Close
							</button>
						</center>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

const DeleteMovie = (props) => {
	const deleteMovie = () => {
		console.log(props.movieId);
		axios
			.delete(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/movie/${props.movie.movieId}`
			)
			.then(() => {
				console.log(true);
			})
			.catch((error) => {
				console.log(error);
			});
		props.onHide();
	};
	return (
		<>
			<Modal {...props} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete <b>{props.movie.title}</b>{" "}
					Movie?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={deleteMovie}>
						Delete
					</Button>
					<Button variant="outline-primary" onClick={props.onHide}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

const Card = ({ movie, index }) => {
	const [shallEdit, setShallEdit] = useState(false);
	const [shallDelete, setShallDelete] = useState(false);
	return (
		<>
			{console.log(movie)}
			<div id={`grid${index + 1}`} className="card">
				<img
					src={movie.moviePosterUrl}
					alt="mypic"
					className="cardimg"
				/>
				<div className="cardinfo">
					<h3 className="card_title">{movie.movieName}</h3>
					<h4 className="card_year">{movie.yearOfRelease}</h4>
					<h5 className="card_time">{movie.duration} min</h5>
					<h6 className="card_genre">{movie.movieCast}</h6>
					<center>
						<button
							type="submit"
							onClick={() => setShallEdit(true)}
							className="btn btn-outline-primary"
						>
							Edit
						</button>
						&nbsp;&nbsp;
						<button
							type="submit"
							onClick={() => setShallDelete(true)}
							className="btn btn-outline-danger"
						>
							Delete
						</button>
					</center>
				</div>
			</div>
			{shallEdit && (
				<EditMovieDetails
					show={shallEdit}
					onHide={() => setShallEdit(false)}
					key={movie.id}
					movie={movie}
				/>
			)}
			{shallDelete && (
				<DeleteMovie
					show={shallDelete}
					onHide={() => setShallDelete(false)}
					key={movie.id}
					movie={movie}
				/>
			)}
		</>
	);
};

export default Card;
