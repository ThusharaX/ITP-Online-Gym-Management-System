import React from "react";

// Page components
import WorkoutProgramList from "./WorkoutProgramList";
import AddWorkoutProgram from "./AddWorkoutProgram";

// WorkoutProgramProvider
import { WorkoutProgramProvider } from "../../contexts/WorkoutProgramContext";

const WorkoutProgram = () => {
	return (
		<div>
			<h1>Workout Program Page</h1>

			<WorkoutProgramProvider>
				<style jsx>{`
					.components {
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						margin: 0 auto;
					}
				`}</style>

				<div className="components">
					{/* WorkoutProgram list */}
					<WorkoutProgramList />

					{/* Add new WorkoutProgram */}
					<AddWorkoutProgram />
				</div>
			</WorkoutProgramProvider>
		</div>
	);
};

export default WorkoutProgram;
