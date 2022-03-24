import React from "react";

// Page components
import WorkoutProgramList from "./WorkoutProgramList";
import AddWorkoutProgram from "./AddWorkoutProgram";

// WorkoutProgramProvider
import { WorkoutProgramProvider } from '../../contexts/WorkoutProgramContext';

const WorkoutProgram = () => {

	return (
		<div>
			<h1>Workout Program Page</h1>

			<WorkoutProgramProvider>

				{/* WorkoutProgram list */}
				<WorkoutProgramList />
				
				{/* Add new WorkoutProgram */}
				<AddWorkoutProgram />

			</WorkoutProgramProvider>
		</div>
	)
}

export default WorkoutProgram