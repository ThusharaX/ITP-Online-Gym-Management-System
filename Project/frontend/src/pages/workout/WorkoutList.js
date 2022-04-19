import React, { useState, useEffect } from "react";
import WorkoutAPI from "../../contexts/api/WorkoutAPI";

const WorkoutList = () => {
	const [workouts, setWorkouts] = useState([]);

	//Get all workouts
	useEffect(() => {
		WorkoutAPI.getWorkoutData().then((response) => {
			setWorkouts(response.data);
		});
	}, []);

	return (
		<div>
			<h2>WorkoutList</h2>

			{workouts.map((workout) => (
				<div key={workout._id}>
					<p> Workout Name :{workout.workout_name} </p>
					<p> Workout Category :{workout.workout_category} </p>
					<p> Muscle group :{workout.muscle_group} </p>
					<p> Starting position img :{workout.starting_position_img} </p>
					<p> Mid position img :{workout.mid_position_img} </p>
					<p> Instructions :{workout.instructions} </p>
					<p> Action :{workout.action} </p>
					<p> Tips :{workout.tips} </p>
					<p> Created At :{workout.createdAt} </p>
					<p> viewCount :{workout.viewCount} </p>
				</div>
			))}
		</div>
	);
};

export default WorkoutList;
