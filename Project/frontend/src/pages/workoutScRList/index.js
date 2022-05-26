import React from "react";

// Page Components
import WorkoutScRList from "./WorkoutScRList";
import EditWorkoutScR from "./EditWorkoutScRList";

// WorkoutScR Provider
import { WorkoutScRProvider } from "../../contexts/WorkoutScRContext";

const workoutScRList = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Workout Schedule Requests</h1>

			<WorkoutScRProvider>
				<WorkoutScRList />
			</WorkoutScRProvider>
		</div>
	);
};

export default workoutScRList;
