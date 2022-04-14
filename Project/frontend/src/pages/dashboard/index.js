import React, { useState, useEffect } from "react";
import DashboardAPI from "../../contexts/api/DashboardAPI";

const Dashboard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		DashboardAPI.getDashboardData().then((response) => {
			setData(response.data);
		});
	}, []);

	return (
		<div>
			<h1>Dashboard Page</h1>

			<p>{data.message}</p>
		</div>
	);
};

export default Dashboard;
