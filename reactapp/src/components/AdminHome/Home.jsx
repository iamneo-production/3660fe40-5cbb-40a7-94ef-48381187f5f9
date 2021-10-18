import { useState } from "react";
import { EditUserDetails, DeleteUserDetails } from "./UpdateUserDetails.jsx";
import SearchComponent from "../Utils/SearchComponent";
import AdminNavigation from "../NavigationBar/AdminNavigation.js";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminHome = () => {
	const userList = [
		{
			id: 1,
			name: "User 1",
			email: "user1@gmail.com",
			mobile: "0123456789",
		},
		{
			id: 2,
			name: "User 2",
			email: "user2@gmail.com",
			mobile: "0123456789",
		},
		{
			id: 3,
			name: "User 3",
			email: "user3@gmail.com",
			mobile: "0123456789",
		},
		{
			id: 4,
			name: "User 4",
			email: "user4@gmail.com",
			mobile: "0123456789",
		},
	];
	// a useEffect and an api call inside it to get the users list
	// const [userList, setUserList] = useState([]);

	const RenderUser = (user, index) => {
		const [shallEdit, setShallEdit] = useState(false);
		const [shallDelete, setShallDelete] = useState(false);
		return (
			<>
				<tr key={index}>
					<td>
						<center>{user.id}</center>
					</td>
					<td>
						<center>{user.name}</center>
					</td>
					<td>
						<center>{user.email}</center>
					</td>
					<td>
						<center>{user.mobile}</center>
					</td>
					<td>
						<center>
							<button
								type="submit"
								onClick={() => setShallEdit(true)}
								className="btn btn-outline-secondary"
							>
								<span className="fa fa-edit fa-lg"></span>
							</button>
							&nbsp;&nbsp;
							<button
								type="submit"
								onClick={() => setShallDelete(true)}
								className="btn btn-outline-danger"
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
						key={user.id}
						user={user}
					/>
				)}
				{shallDelete && (
					<DeleteUserDetails
						show={shallDelete}
						onHide={() => setShallDelete(false)}
						key={user.id}
						user={user}
					/>
				)}
			</>
		);
	};

	return (
		<>
			<AdminNavigation />
			<SearchComponent />
			<div className="container table-container">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">
								<center>S.No</center>
							</th>
							<th scope="col">
								<center>Name</center>
							</th>
							<th scope="col">
								<center>Email</center>
							</th>
							<th scope="col">
								<center>Mobile</center>
							</th>
							<th scope="col">
								<center>Options</center>
							</th>
						</tr>
					</thead>
					<tbody>{userList.map(RenderUser)}</tbody>
				</table>
			</div>
		</>
	);
};
export default AdminHome;
