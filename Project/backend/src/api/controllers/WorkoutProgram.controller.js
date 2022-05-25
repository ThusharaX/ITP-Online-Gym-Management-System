import WorkoutProgramService from "../services";
import sendMail from "../../util/sendMail";

// Insert one Workout Program
export const insertWorkoutProgram = async (request, response, next) => {
	// Get all memebers email list
	const emailList = await WorkoutProgramService.getMembersEmailList();

	await WorkoutProgramService.insertWorkoutProgram(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			sendMail({
				email: emailList,
				subject: "New Workout Program Added",
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

// Get all Workout Programs
export const getAllWorkoutPrograms = async (request, response, next) => {
	await WorkoutProgramService.getAllWorkoutPrograms()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one Workout Program
export const getOneWorkoutProgram = async (request, response, next) => {
	await WorkoutProgramService.getOneWorkoutProgram(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one Workout Program
export const updateWorkoutProgram = async (request, response, next) => {
	await WorkoutProgramService.updateWorkoutProgram(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one Workout Program
export const deleteWorkoutProgram = async (request, response, next) => {
	await WorkoutProgramService.deleteWorkoutProgram(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Workout Programs
export const searchWorkoutPrograms = async (request, response, next) => {
	await WorkoutProgramService.searchWorkoutPrograms(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// getTotalRevenue
export const getTotalRevenue = async (request, response, next) => {
	await WorkoutProgramService.getTotalRevenue(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// getAllWorkoutPrograms with total revenue
export const getAllWorkoutProgramsWithTotalRevenue = async (request, response, next) => {
	const workoutPrograms = await WorkoutProgramService.getAllWorkoutPrograms();

	for (let i = 0; i < workoutPrograms.length; i++) {
		const totalRevenue = await WorkoutProgramService.getTotalRevenue(workoutPrograms[i].id);
		workoutPrograms[i].totalRevenue = totalRevenue;
	}

	// Build new object with total revenue
	const newWorkoutPrograms = workoutPrograms.map((workoutProgram) => {
		return {
			...workoutProgram._doc,
			totalRevenue: workoutProgram.totalRevenue,
		};
	});
	request.handleResponse.successRespond(response)(newWorkoutPrograms);
	next();
};
