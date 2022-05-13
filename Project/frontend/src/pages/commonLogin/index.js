import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const CommonLogin = () => {
	return (
		<div
			style={{
				flex: 1,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			{/* Login button link for ADMIN, TRAINER, and MEMBER */}
			<h1>Login Page</h1>

			<Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/admin/login">
					Admin Login
				</Link>
			</Button>
			<br />
			<Button variant="gradient" gradient={{ from: "teal", to: "lime", deg: 105 }}>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/trainers/login">
					Trainer Login
				</Link>
			</Button>
			<br />
			<Button variant="gradient" gradient={{ from: "teal", to: "blue", deg: 60 }}>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/member/login">
					Member Login
				</Link>
			</Button>
		</div>
	);
};

export default CommonLogin;
