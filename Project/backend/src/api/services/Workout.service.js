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

// Get all workouts
export const getAllWorkouts = async () => {
	return await WorkoutModel.find({})
		.then((workouts) => {
			return workouts;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one workout
export const getOneWorkout = async (workoutId) => {
	return await WorkoutModel.findById(workoutId)
		.then((workout) => {
			if (workout) {
				return workout;
			} else {
				throw new Error("Workout not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one workout
export const updateworkout = async (workoutId, workoutData) => {
	return await WorkoutModel.findByIdAndUpdate(workoutId, workoutData, {
		new: true,
	})
		.then((workout) => {
			if (workout) {
				return workout;
			} else {
				throw new Error("Workout not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one workout
export const deleteWorkout = async (workoutId) => {
	return await WorkoutModel.findByIdAndDelete(workoutId)
		.then((workout) => {
			if (workout) {
				return workout;
			} else {
				throw new Error("Workout not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search workout workout_name
export const searchWorkouts = async (searchTerm) => {
	return await WorkoutModel.find({
		$or: [{ workout_name: { $regex: searchTerm, $options: "i" } }],
	})
		.then((workouts) => {
			return workouts;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Increse workout views
export const increaseViewCount = async (workoutId) => {
	await WorkoutModel.findByIdAndUpdate(workoutId, { $inc: { viewCount: 1 } });
	return await WorkoutModel.findById(workoutId)
		.then((workout) => {
			if (workout) {
				return workout;
			} else {
				throw new Error("Workout not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all workouts oder by most viewCount
export const getAllWorkoutsOrderByViewCount = async () => {
	return await WorkoutModel.find({})
		.sort({ viewCount: -1 })
		.then((workouts) => {
			return workouts;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
