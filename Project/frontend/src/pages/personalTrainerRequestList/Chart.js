import React, { useContext } from "react";
import BarChart from "../../components/chartReq/BarChart";
import LineChart from "../../components/chartReq/LineChart";
import PieChart from "../../components/chartReq/PieChart";
import { PersonalTrainerRequestContext } from "../../contexts/PersonalTrainerRequestContext";

function Chart() {
	// const { requests, setRequests, request } = useContext({
	// 	labels: [requests.map((data) => data.perTrainer)],
	// 	datasets: [
	// 		{
	// 			label: "Users Gained",
	// 			data: requests.map((data) => data.package),
	// 			backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
	// 			borderColor: "black",
	// 			borderWidth: 2,
	// 		},
	// 	],
	// });
	// return (
	// 	<div className="App">
	// 		<div style={{ width: 700 }}>
	// 			<BarChart chartData={request} />
	// 		</div>
	// 		<div style={{ width: 700 }}>
	// 			<LineChart chartData={request} />
	// 		</div>
	// 		<div style={{ width: 700 }}>
	// 			<PieChart chartData={request} />
	// 		</div>
	// 	</div>
	// );
}

export default Chart;
