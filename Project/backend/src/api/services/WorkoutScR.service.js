import WorkoutScRModel from "../models/WorkoutScR.model";

// Insert Workout schedule Request
export const insertWorkoutScR = async (WorkoutScRData) => {
	return await WorkoutScRModel.create(WorkoutScRData)
		.then(async (WorkoutScR) => {
			await WorkoutScR.save();
			return WorkoutScR;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Workout schedule Request
export const updateWorkoutScR = async (WorkoutScRId, WorkoutScRData) => {
	return await WorkoutScRModel.findByIdAndUpdate(WorkoutScRId, WorkoutScRData, {
		new: true,
	})
		.then((WorkoutScR) => {
			if (WorkoutScR) {
				return WorkoutScR;
			} else {
				throw new Error("WorkoutScR not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Workout Schedule Request
export const deleteWorkoutScR = async (WorkoutScRId) => {
	return await WorkoutScRModel.findByIdAndDelete(WorkoutScRId)
		.then((WorkoutScR) => {
			if (WorkoutScR) {
				return WorkoutScR;
			} else {
				throw new Error("WorkoutScR not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Workout schedule Request
export const getAllWorkoutScR = async () => {
	return await WorkoutScRModel.find({})
		.then((WorkoutScR) => {
			return WorkoutScR;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one workout Program
export const getOneWorkoutScR = async (workoutScRId) => {
	return await WorkoutScRModel.findById(workoutScRId)
		.then((workoutScR) => {
			if (workoutScR) {
				return workoutScR;
			} else {
				throw new Error("Workout Schedule Request not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
