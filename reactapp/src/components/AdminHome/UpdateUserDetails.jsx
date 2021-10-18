import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const EditUserDetails = (props) => {
	const [updatedUserDetails, setUpdatedUserDetails] = useState({
		name: props.user.name,
		email: props.user.email,
		mobile: props.user.mobile,
	});
	const handleChange = (event) => {
		setUpdatedUserDetails({
			...updatedUserDetails,
			[event.target.name]: event.target.value,
		});
	};
	const updateUserDetails = (event) => {
		event.preventDefault();
		console.log(updatedUserDetails);

		// make an api [POST] call to update the user details
	};

	return (
		<>
			<Modal
				{...props}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Edit User
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="mb-3">
							<label htmlFor="enterName" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="enterName"
								name="name"
								defaultValue={props.user.name}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="enterEmail" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="enterEmail"
								pattern=".+@globex\.com"
								name="email"
								defaultValue={props.user.email}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="enterMobile" className="form-label">
								Mobile
							</label>
							<input
								type="text"
								className="form-control"
								id="enterMobile"
								pattern="^(\+\d{1,3}[- ]?)?\d{10}$"
								name="mobile"
								defaultValue={props.user.mobile}
								onChange={handleChange}
							/>
						</div>
						<center>
							<button
								className="btn btn-primary"
								id="updateButton"
								onClick={updateUserDetails}
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
export const DeleteUserDetails = (props) => {
	const deleteUser = () => {
		console.log(props.user.id); // accessing the user with user id
		// call an api to delete a particular user
		props.onHide();
	};
	return (
		<>
			<Modal {...props} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete <b>{props.user.name}</b>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={deleteUser}>
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
