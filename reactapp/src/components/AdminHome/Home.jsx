import { useState, useEffect } from "react";
import SearchComponent from "../Utils/SearchComponent";
import AdminNavigation from "../NavigationBar/AdminNavigation.js";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderUser from "./RenderUser.js";
import axios from "axios";

const AdminHome = () => {
	// const userList = [
	// 	{
	// 		id: 1,
	// 		name: "User 1",
	// 		email: "user1@gmail.com",
	// 		mobile: "0123456789",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "User 2",
	// 		email: "user2@gmail.com",
	// 		mobile: "0123456789",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "User 3",
	// 		email: "user3@gmail.com",
	// 		mobile: "0123456789",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "User 4",
	// 		email: "user4@gmail.com",
	// 		mobile: "0123456789",
	// 	},
	// ];
	const [userList, setUserList] = useState([]);
	useEffect(async () => {
		const response = await axios.get(
			"https://8080-dfebdafacfadcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin/"
		);
		setUserList(response.data);
		console.log(userList);
	}, []);

	return (
		<>
			<AdminNavigation />
			<div id="adminHome">
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
						<tbody>
							{userList.map((user, key) => (
								<RenderUser key={key} user={user} index={key} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};
export default AdminHome;
