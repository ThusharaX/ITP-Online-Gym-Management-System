import React from "react";

// Page components
import WorkoutProgramList from "./WorkoutProgramList";
import AddWorkoutProgramModal from "./AddWorkoutProgramModal";
import Search from "./Search";

// WorkoutProgramProvider
import { WorkoutProgramProvider } from "../../contexts/WorkoutProgramContext";

import { SimpleGrid } from "@mantine/core";

const WorkoutProgram = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Workout Programs</h1>

			<WorkoutProgramProvider>
				<Search />

				<AddWorkoutProgramModal />

				<SimpleGrid
					cols={4}
					spacing="lg"
					breakpoints={[
						{ maxWidth: 1350, cols: 3, spacing: "md" },
						{ maxWidth: 1020, cols: 2, spacing: "sm" },
						{ maxWidth: 675, cols: 1, spacing: "sm" },
					]}
				>
					<WorkoutProgramList />
				</SimpleGrid>
			</WorkoutProgramProvider>
		</div>
	);
};

export default WorkoutProgram;
