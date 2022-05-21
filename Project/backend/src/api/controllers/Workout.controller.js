import WorkoutService from "../services";

// Insert one workout
export const insertWorkout = async (request, response, next) => {
	await WorkoutService.insertWorkout(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all workouts
export const getAllWorkouts = async (request, response, next) => {
	await WorkoutService.getAllWorkouts()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one workout
export const getOneWorkout = async (request, response, next) => {
	await WorkoutService.getOneWorkout(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one workout
export const updateWorkout = async (request, response, next) => {
	await WorkoutService.updateworkout(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one workout
export const deleteWorkout = async (request, response, next) => {
	await WorkoutService.deleteWorkout(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search workouts
export const searchWorkouts = async (request, response, next) => {
	await WorkoutService.searchWorkouts(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Increse workout views
export const increaseViewCount = async (request, response, next) => {
	await WorkoutService.increaseViewCount(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get most popular workouts
export const getMostPopularWorkouts = async (request, response, next) => {
	await WorkoutService.getAllWorkoutsOrderByViewCount()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
