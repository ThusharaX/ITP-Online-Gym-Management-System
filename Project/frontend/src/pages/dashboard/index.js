import React, { useState, useEffect, useContext } from "react";
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

			<p>Logged User: {localStorage.getItem("username")}</p>

			<p>{data.message}</p>
		</div>
	);
};

export default Dashboard;
