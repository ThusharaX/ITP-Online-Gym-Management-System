// import generateToken from "../../util/generateToken";
import UserService from "../services";
import logger from "../../util/logger";

export const login = async (request, response, next) => {
	const { username, password } = request.body;

	if (username && password) {
		await UserService.authenticateUser(username, password)
			.then(async (user) => {
				const authToken = await user.generateAuthToken();
				const data = {
					_id: user._id,
					username: user.username,
					token: authToken,
					permissionLevel: user.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Create user
export const createUser = async (req, res, next) => {
	const user = {
		avatar: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nic: req.body.nic,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		permissionLevel: req.body.permissionLevel,
	};

	await UserService.insertUser(user)
		.then((data) => {
			logger.info(`New user with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

export const getAdminDashboard = async (req, res) => {
	res.json({
		message: "Admin Dashboard",
	});
};

// Enroll user to workout program
export const enrollUserToWorkoutProgram = async (req, res, next) => {
	const { userId, workoutProgramId } = req.body;

	await UserService.enrollUserToWorkoutProgram(userId, workoutProgramId)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// unenrollUserFromWorkoutProgram
export const unenrollUserFromWorkoutProgram = async (req, res, next) => {
	const { userId, workoutProgramId } = req.body;

	await UserService.unenrollUserFromWorkoutProgram(userId, workoutProgramId)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// getAllEnrolledWorkoutPrograms
export const getAllEnrolledWorkoutPrograms = async (req, res, next) => {
	await UserService.getAllEnrolledWorkoutPrograms(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Delete user
export const deleteUser = async (req, res, next) => {
	await UserService.deleteUser(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Get user details
export const getUserDetails = async (req, res, next) => {
	await UserService.getUserDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Get All employee Details
export const getAllEmployees = async (req, res, next) => {
	await UserService.getAllEmployees(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Update User
export const updateUser = async (request, response, next) => {
	await UserService.updateUser(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search users
export const searchUsersMember = async (request, response, next) => {
	await UserService.searchUsersMember(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
