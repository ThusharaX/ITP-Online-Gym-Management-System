import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<h1>Member Dashboard</h1>
			<Button>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/personal">
					Create Personal Trainer Request
				</Link>
			</Button>
			<br />
			<br />
			<br />
			<Button>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/bd">
					Watch Personal Trainer Details
				</Link>
			</Button>
			<br />
			<br />
			<br />
		</div>
	);
};

export default Dashboard;
