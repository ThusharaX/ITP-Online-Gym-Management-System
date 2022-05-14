import WorkoutScRService from "../services";

// Insert  Workout schedule Request
export const insertWorkoutScR = async (request, response, next) => {
	await WorkoutScRService.insertWorkoutScR(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update Workout Schedule Request
export const updateWorkoutScR = async (request, response, next) => {
	await WorkoutScRService.updateWorkoutScR(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete Workout Schedule Request
export const deleteWorkoutScR = async (request, response, next) => {
	await WorkoutScRService.deleteWorkoutScR(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all Workout schedule Request
export const getAllWorkoutScR = async (request, response, next) => {
	await WorkoutScRService.getAllWorkoutScR()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one workout Schedule Request

export const getOneWorkoutScR = async (request, response, next) => {
	await WorkoutScRService.getOneWorkoutScR(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
