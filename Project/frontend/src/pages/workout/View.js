import React, { useContext } from "react";

import WorkoutContext from "../../contexts/WorkoutContext";

const View = () => {
	const { workout } = useContext(WorkoutContext);
	return (
		<div>
			{/* Center */}
			<h1 style={{ textAlign: "center" }}>{workout.workout_name}</h1>
			<h2>Category : {workout.workout_category}</h2>
			<h3>Muscle Group : {workout.muscle_group}</h3>
			{/* Image Size: 300x300 */}
			<img src={workout.starting_position_img} alt="Starting Position" style={{ width: 400, height: 300 }} />
			<img src={workout.mid_position_img} alt="Mid Position" style={{ width: 400, height: 300 }} />
			<p>Instructions: {workout.instructions}</p>
			<p>Action: {workout.action}</p>
			<p>Tips: {workout.tips}</p>
		</div>
	);
};

export default View;
