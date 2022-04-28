import PersonalTrainerReqService from "../services";

// Insert one request
export const insertPersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.insertPersonalTrainerReq(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all request
export const getAllPersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.getAllPersonalTrainerReq("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one request
export const getOnePersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.getOnePersonalTrainerReq(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one request
export const updatePersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.updatePersonalTrainerReq(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one request
export const deletePersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.deletePersonalTrainerReq(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search request
// export const searchPersonalTrainerReq = async (request, response, next) => {
// 	await PersonalTrainerReqService.searchPersonalTrainerReq(request.params.search)
// 		.then((data) => {
// 			request.handleResponse.successRespond(response)(data);
// 			next();
// 		})
// 		.catch((error) => {
// 			request.handleResponse.errorRespond(response)(error.message);
// 			next();
// 		});
// };
