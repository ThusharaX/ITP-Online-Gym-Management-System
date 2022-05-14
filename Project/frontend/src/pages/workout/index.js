import React from "react";

// Page components
import WorkoutList from "./WorkoutList";
import AddWorkoutModal from "./AddWorkoutModal";
import Search from "./Search";

// WorkoutProvider
import { WorkoutProvider } from "../../contexts/WorkoutContext";

import { SimpleGrid } from "@mantine/core";

const Workout = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Workouts</h1>

			<WorkoutProvider>
				<Search />

				<AddWorkoutModal />

				<SimpleGrid
					cols={4}
					spacing="lg"
					breakpoints={[
						{ maxWidth: 1350, cols: 3, spacing: "md" },
						{ maxWidth: 1020, cols: 2, spacing: "sm" },
						{ maxWidth: 675, cols: 1, spacing: "sm" },
					]}
				>
					<WorkoutList />
				</SimpleGrid>
			</WorkoutProvider>
		</div>
	);
};

export default Workout;
