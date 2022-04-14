import React from "react";

const NavBar = () => {
	const handleLogOut = (event) => {
		if (event) {
			localStorage.removeItem("authToken");
			window.location.href = "/userLogin";
		}
	};

	return (
		<div style={{ textDecoration: "none" }}>
			<h1>NavBar</h1>

			{/* Login */}
			<button>
				<a href="/userLogin">Log In</a>
			</button>

			{/* Logout button */}
			<button onClick={handleLogOut}>Logout</button>

			{/* Dashboard button */}
			<button>
				<a href="/dashboard">Dashboard</a>
			</button>
		</div>
	);
};

export default NavBar;
