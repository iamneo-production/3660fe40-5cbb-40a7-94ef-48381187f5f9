import { useHistory } from "react-router";
const UserNavigation = ({ userDetails, setUserDetails }) => {
	const history = useHistory();
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

export default UserNavigation;
