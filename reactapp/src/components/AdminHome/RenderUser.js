import React, { useState } from "react";
import { EditUserDetails, DeleteUserDetails } from "./UpdateUserDetails.jsx";
function RenderUser({ user, index }) {
	const [shallEdit, setShallEdit] = useState(false);
	const [shallDelete, setShallDelete] = useState(false);
	return (
		<>
			<tr id={`grid${index + 1}`} key={index}>
				<td>
					<center>{index+1}</center>
				</td>
				<td>
					<center>{user.username}</center>
				</td>
				<td>
					<center>{user.email}</center>
				</td>
				<td>
					<center>{user.mobileNumber}</center>
				</td>
				<td>
					<center>
						<button
							type="submit"
							onClick={() => setShallEdit(true)}
							className="btn btn-outline-secondary"
							id="editButton"
						>
							<span className="fa fa-edit fa-lg"></span>
						</button>
						&nbsp;&nbsp;
						<button
							type="submit"
							onClick={() => setShallDelete(true)}
							className="btn btn-outline-danger"
							id="deleteButton"
						>
							<span className="fa fa-trash fa-lg"></span>
						</button>
					</center>
				</td>
			</tr>

			{shallEdit && (
				<EditUserDetails
					show={shallEdit}
					onHide={() => setShallEdit(false)}
					key={index}
					user={user}
				/>
			)}
			{shallDelete && (
				<DeleteUserDetails
					show={shallDelete}
					onHide={() => setShallDelete(false)}
					key={index}
					user={user}
				/>
			)}
		</>
	);
}

export default RenderUser;
