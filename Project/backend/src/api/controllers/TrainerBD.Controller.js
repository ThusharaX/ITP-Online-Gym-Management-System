import TrainerBDService from "../services";
import sendMail from "../../util/sendMail";

// Insert one sample
export const insertTrainerBD = async (request, response, next) => {
	// Get all trainers email list
	const emailList = await TrainerBDService.getMembersEmailList();

	await TrainerBDService.insertTrainerBD(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			sendMail({
				email: emailList,
				subject: "Your Newly Created Blog Successfully Added",
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

// Get all samples
export const getAllTrainerBD = async (request, response, next) => {
	await TrainerBDService.getAllTrainerBD("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one sample
export const getOneTrainerBD = async (request, response, next) => {
	await TrainerBDService.getOneTrainerBD(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one sample
export const updateTrainerBD = async (request, response, next) => {
	await TrainerBDService.updateTrainerBD(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one sample
export const deleteTrainerBD = async (request, response, next) => {
	await TrainerBDService.deleteTrainerBD(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
