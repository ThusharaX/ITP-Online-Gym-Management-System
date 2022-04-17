import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
	const { logout } = useContext(UserContext);

	return (
		<div style={{ textDecoration: "none" }}>
			<h1>NavBar</h1>

			{/* Login */}
			<button>
				<a href="/userLogin">Log In</a>
			</button>

			{/* Logout button */}
			<button onClick={logout}>Logout</button>

			{/* Dashboard button */}
			<button>
				<a href="/dashboard">Dashboard</a>
			</button>
		</div>
	);
};

export default NavBar;
