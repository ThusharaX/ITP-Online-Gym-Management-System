import UserModel from "../models/User.model";

export const authenticateUser = async (username, password) => {
	return await UserModel.findOne({ username })
		.then(async (user) => {
			if (user && (await user.matchPassword(password))) {
				return user;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertUser = async (user) => {
	return await UserModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// enrollUserToWorkoutProgram
export const enrollUserToWorkoutProgram = async (userId, workoutProgramId) => {
	const user = await UserModel.findById(userId);
	if (user.enrolledWorkoutPrograms.includes(workoutProgramId)) {
		throw new Error("User is already enrolled to the workout program!");
	} else {
		return await UserModel.findByIdAndUpdate(
			userId,
			{
				$push: {
					enrolledWorkoutPrograms: workoutProgramId,
				},
			},
			{ new: true }
		)
			.then(() => {
				// return enrolled workout program
				// return user.enrolledWorkoutPrograms;
				return workoutProgramId;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
};

// unenrollUserFromWorkoutProgram
export const unenrollUserFromWorkoutProgram = async (userId, workoutProgramId) => {
	const user = await UserModel.findById(userId);
	if (!user.enrolledWorkoutPrograms.includes(workoutProgramId)) {
		throw new Error("User is not enrolled to the workout program!");
	} else {
		return await UserModel.findByIdAndUpdate(
			userId,
			{
				$pull: {
					enrolledWorkoutPrograms: workoutProgramId,
				},
			},
			{ new: true }
		)
			.then(() => {
				// return enrolled workout program
				// return user.enrolledWorkoutPrograms;
				return workoutProgramId;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
};

// getAllEnrolledWorkoutPrograms
export const getAllEnrolledWorkoutPrograms = async (userId) => {
	const user = await UserModel.findById(userId);
	return await user.enrolledWorkoutPrograms;
};
