import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const EditUserDetails = (props) => {
	console.log(props.user);
	const [updatedUserDetails, setUpdatedUserDetails] = useState({
		userId: props.user.userId,
		email: props.user.email,
		password: props.user.password,
		username: props.user.username,
		mobileNumber: props.user.mobileNumber,
		active: props.user.active,
		role: props.user.role,
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
		axios
			.put(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/userEdit/${props.user.userId}`,
				updatedUserDetails
			)
			.then((response) => {
				if (response.data){
					props.setShallUpdate(true);
				}
			})
			.catch((error) => {
				console.log(error);
			});
		props.onHide();
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
								name="username"
								defaultValue={props.user.username}
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
								name="mobileNumber"
								defaultValue={props.user.mobileNumber}
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
	console.log(props);
	const deleteUser = (event) => {
		axios
			.delete(
				`https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/delete/${props.user.userId}`
			)
			.then( () => {
				props.setShallUpdate(true);
			}
			)
			.catch((error) => {
				console.log(error);
			});
		props.onHide();
	};
	return (
		<>
			<Modal {...props} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete <b>{props.user.username}</b>
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
