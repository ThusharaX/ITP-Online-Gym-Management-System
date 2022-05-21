import React from "react";

import Report from "./Report";

// WorkoutProvider
import { WorkoutProvider } from "../../contexts/WorkoutContext";

const WorkoutReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Workout Report</h1>

			<WorkoutProvider>
				<Report />
			</WorkoutProvider>
		</div>
	);
};

export default WorkoutReport;
