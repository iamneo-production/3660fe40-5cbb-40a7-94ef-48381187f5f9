import { useHistory } from "react-router";
const AdminNavigation = ({ userDetails, setUserDetails }) => {
	const history = useHistory();
	const handleHomeRedirect = () => {
		history.push("/admin");
	};
	const handleMovieRedirect = () => {
		history.push("/admin/movie");
	};
	const handleLogout = () => {
		setUserDetails({
			email: "",
			username: "",
			mobileNumber: "",
			password: "",
			role: "user",
			active: false,
		});
		history.push("/login");
	};
	return (
		<div className="navbar">
			<h1>Mr.Viewer</h1>
			<div className="nav-right">
				<button
					id="homeButton"
					className="btn nav-btn"
					onClick={handleHomeRedirect}
				>
					Home
				</button>
				<button
					id="movieButton"
					className="btn nav-btn"
					onClick={handleMovieRedirect}
				>
					Movie
				</button>
				<button
					id="logoutButton"
					className="btn nav-btn"
					onClick={handleLogout}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminNavigation;
