import React from "react";

// Page Components

import AddWorkoutScR from "./AddWorkoutScr";

// WorkoutScR Provider
import {WorkoutScRProvider} from "../../contexts/WorkoutScRContext";

const WorkoutScR =() => {
	return (

		<div>	
			<h1>Workout SCR</h1>

			<WorkoutScRProvider>

				<AddWorkoutScR/>

			</WorkoutScRProvider>

				
					

				

	
	
		</div>
		

        



	);
};

export default WorkoutScR; 