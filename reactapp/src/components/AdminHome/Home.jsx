import { useState, useEffect } from "react";
import SearchComponent from "../Utils/SearchComponent";
import AdminNavigation from "../NavigationBar/AdminNavigation.js";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderUser from "./RenderUser.js";
import axios from "axios";

const AdminHome = (props) => {
	const [shallUpdate, setShallUpdate] = useState(false);
	const [userList, setUserList] = useState([]);
	useEffect(() => {
		axios.get(
			"https://8080-bdaeafcfacbcaeaaebdcfaaecffadcafacbdabedccca.examlyiopb.examly.io/admin"
		).then(
			(response) => {
				setUserList(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [shallUpdate]);

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
								<RenderUser
									key={key}
									user={user}
									index={key}
									setShallUpdate={setShallUpdate}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};
export default AdminHome;
