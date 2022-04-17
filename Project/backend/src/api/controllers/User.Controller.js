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
