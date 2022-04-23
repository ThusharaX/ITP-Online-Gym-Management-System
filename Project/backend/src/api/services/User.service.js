import UserModel from "../models/User.model";
import EnrollWorkoutProgramModel from "../models/EnrollWorkoutProgram.model";

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

// Only return workoutProgram if user is enrolled
export const getAllEnrolledWorkoutPrograms = async (userId) => {
	return await EnrollWorkoutProgramModel.find({ user: userId })
		.then((enrollWorkoutPrograms) => {
			return enrollWorkoutPrograms.map((enrollWorkoutProgram) => {
				return enrollWorkoutProgram.workoutProgram;
			});
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
