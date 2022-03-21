import TestService from "../services";

export const getTest = async (request, response, next) => {
	await TestService.getTest("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};