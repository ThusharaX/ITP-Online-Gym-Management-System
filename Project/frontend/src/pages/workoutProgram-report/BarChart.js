import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChaart = ({ data }) => {
	return (
		<div style={{ width: "50%", height: "50%" }}>
			<Bar
				// style={{ width: "100%", height: "100%" }}
				data={data}
				// width={10}
				// height={5}
				options={{
					maintainAspectRatio: true,
				}}
			/>
		</div>
	);
};

export default BarChaart;
