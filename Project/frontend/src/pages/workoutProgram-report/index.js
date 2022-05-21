import React from "react";

import Report from "./Report";

// WorkoutProgramProvider
import { WorkoutProgramProvider } from "../../contexts/WorkoutProgramContext";

const WorkoutProgramReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Workout Program Report</h1>

			<WorkoutProgramProvider>
				<Report />
			</WorkoutProgramProvider>
		</div>
	);
};

export default WorkoutProgramReport;
