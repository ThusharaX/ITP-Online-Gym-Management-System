import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<h1>Admin Dashboard</h1>

			<Button>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/workout-report">
					Generate Workout Report
				</Link>
			</Button>
		</div>
	);
};

export default Dashboard;
