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

// Get all users email list where permissionLevel is MEMBER
export const getMembersEmailList = async () => {
	return await UserModel.find({ permissionLevel: "MEMBER" })
		.then((data) => {
			return data.map((user) => {
				return user.email;
			});
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all users email list where permissionLevel is TRAINER
export const getTrainersEmailList = async () => {
	return await UserModel.find({ permissionLevel: "TRAINER" })
		.then((data) => {
			return data.map((user) => {
				return user.email;
			});
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all users email list where permissionLevel is ADMIN
export const getAdminsEmailList = async () => {
	return await UserModel.find({ permissionLevel: "ADMIN" })
		.then((data) => {
			return data.map((user) => {
				return user.email;
			});
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all users email list where permissionLevel is EMPLOYEE
export const getEmployeesEmailList = async () => {
	return await UserModel.find({ permissionLevel: "EMPLOYEE" })
		.then((data) => {
			return data.map((user) => {
				return user.email;
			});
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
