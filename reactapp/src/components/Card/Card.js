import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Card.css";

const EditMovieDetails = (props) => {
	const [updatedMovieDetails, setUpdatedMovieDetails] = useState({
		name: props.movie.name,
		email: props.movie.email,
		mobile: props.movie.mobile,
	});
	const handleChange = (event) => {
		setUpdatedMovieDetails({
			...updatedMovieDetails,
			[event.target.name]: event.target.value,
		});
	};
	const updateMovieDetails = (event) => {
		event.preventDefault();
		console.log(updatedMovieDetails);

		// make an api [POST] call to update the movie details
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
									defaultValue={props.movie.title}
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
									defaultValue={props.movie.imgsrc}
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
									defaultValue={props.movie.movieurl}
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
										defaultValue={props.movie.year}
										onChange={handleChange}
									/>
								</div>
								<label
									htmlFor="inputKey"
									className="col-md-1 col-form-label"
								>
									Hours
								</label>
								<div className="col-md-2">
									<input
										type="text"
										className="form-control"
										id="inputKey"
										defaultValue={props.movie.hours}
										onChange={handleChange}
									/>
								</div>
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
										defaultValue={props.movie.minutes}
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
									name="cast"
									id="cast"
									rows="5"
									defaultValue={props.movie.cast}
									onChange={handleChange}
								></textarea>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label
								htmlFor="title"
								className="col-sm-2 col-form-label"
							>
								Genre
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="title"
									defaultValue={props.movie.genres}
								/>
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
		console.log(props.movie.id); // accessing the user with user id
		// call an api to delete a particular user
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

const Card = (movie, index) => {
	const [shallEdit, setShallEdit] = useState(false);
	const [shallDelete, setShallDelete] = useState(false);
	return (
		<>
			<div id={`grid${index+1}`} className="card">
				<img src={movie.imgsrc} alt="mypic" className="cardimg" />
				<div className="cardinfo">
					<h3 className="card_title">{movie.title}</h3>
					<h4 className="card_year">{movie.year}</h4>
					<h5 className="card_time">
						{movie.hours}:{movie.minutes}
					</h5>
					<h6 className="card_genre">{movie.genres}</h6>
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
