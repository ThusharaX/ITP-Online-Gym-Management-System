import WorkoutProgramModel from "../models/WorkoutProgram.model";

// Insert one Workout Program
export const insertWorkoutProgram = async (workoutProgramData) => {
	return await WorkoutProgramModel.create(workoutProgramData)
		.then(async (workoutProgram) => {
			await workoutProgram.save();
			return workoutProgram;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};


// Get all Workout Program
export const getAllWorkoutPrograms = async () => {
	return await WorkoutProgramModel.find({})
		.then((workoutPrograms) => {
			return workoutPrograms;
		}
	)
		.catch((error) => {
			throw new Error(error.message);
		}
	);
};

// Get one Workout Program
export const getOneWorkoutProgram = async (workoutProgramId) => {
	return await WorkoutProgramModel.findById(workoutProgramId)
		.then((workoutProgram) => {
			if (workoutProgram) {
				return workoutProgram;
			} else {
				throw new Error("Workout Program not found");
			}
		}
	)
		.catch((error) => {
			throw new Error(error.message);
		}
	);
}

// Update one Workout Program
export const updateWorkoutProgram = async (workoutProgramId, workoutProgramData) => {
	return await WorkoutProgramModel.findByIdAndUpdate(workoutProgramId, workoutProgramData, { new: true })
		.then((workoutProgram) => {
			if (workoutProgram) {
				return workoutProgram;
			} else {
				throw new Error("Workout Program not found");
			}
		}
	)
		.catch((error) => {
			throw new Error(error.message);
		}
	);
}

// Delete one Workout Program
export const deleteWorkoutProgram = async (workoutProgramId) => {
	return await WorkoutProgramModel.findByIdAndDelete(workoutProgramId)
		.then((workoutProgram) => {
			if (workoutProgram) {
				return workoutProgram;
			} else {
				throw new Error("Workout Program not found");
			}
		}
	)
		.catch((error) => {
			throw new Error(error.message);
		}
	);
}

// Search Workout Program titles or content
export const searchWorkoutPrograms = async (searchTerm) => {
	return await WorkoutProgramModel.find({
		$or: [
			{ name: { $regex: searchTerm, $options: "i" } },
			{ description: { $regex: searchTerm, $options: "i" } }
		]
	})
		.then((workoutPrograms) => {
			return workoutPrograms;
		}
	)
		.catch((error) => {
			throw new Error(error.message);
		}
	);
};