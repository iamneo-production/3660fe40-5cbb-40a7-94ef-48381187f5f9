const AdminNavigation = () => {
	return (
		<div className="navbar">
			<h1>Mr.Viewer</h1>
			<div className="nav-right">
				<button id="homeButton" className="btn nav-btn">Home</button>
				<button id="movieButton" className="btn nav-btn">Movie</button>
				<button id="logoutButton" className="btn nav-btn">Logout</button>
			</div>
		</div>
	);
};

export default AdminNavigation;
