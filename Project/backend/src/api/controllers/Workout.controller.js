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