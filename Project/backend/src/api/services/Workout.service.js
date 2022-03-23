import WorkoutModel from "../models/Workout.model";

// Insert one Workout
export const insertWorkout = async (workoutData) => {
	return await WorkoutModel.create(workoutData)
		.then(async (workout) => {
			await workout.save();
			return workout;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};