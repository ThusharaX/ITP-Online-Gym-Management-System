import PersonalTrainerReqService from "../services";
import sendMail from "../../util/sendMail";

// Insert one request
export const insertPersonalTrainerReq = async (request, response, next) => {
	// Get all memebers email list
	const emailList = await PersonalTrainerReqService.getMembersEmailList();

	await PersonalTrainerReqService.insertPersonalTrainerReq(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			sendMail({
				email: emailList,
				subject: "Personal Trainer Request Successfully Added",
				html: `
					<h1>${data.name}</h1>
					<img src="${data.photoURL}" alt="${data.name}">
					<p>${data.description}</p>
				`,
			});
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
export const searchPersonalTrainerReq = async (request, response, next) => {
	await PersonalTrainerReqService.searchPersonalTrainerReq(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
