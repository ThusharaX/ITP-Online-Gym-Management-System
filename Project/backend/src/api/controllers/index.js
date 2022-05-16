import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
} from "./Sample.controller";

import {
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,
} from "./WorkoutProgram.controller";

import {
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,
} from "./TrainerBD.controller";

import {
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,
} from "./PersonalTrainerReq.controller";

import {
	login,
	createUser,
	getAdminDashboard,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,
} from "./User.Controller";

import {
	insertWorkoutScR,
	updateWorkoutScR,
	deleteWorkoutScR,
	getAllWorkoutScR,
	getOneWorkoutScR,
} from "./WorkoutScR.Controller";

import {
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,
} from "./Workout.controller";

import { insertNotice, getAllNotices, getOneNotice, updateNotice, deleteNotice } from "./Notice.Controller";

import { insertQuestion, updateQuestion, deleteQuestion, getAllQuestions } from "./Question.controller";

import { insertSalary, updateSalary, getAllSalaries, getOneSalary } from "./Salary.controller";

import { getTrainer, getTrainers, createTrainer, updateTrainers, deleteTrainers } from "./Trainer.Controller";

import { getEvent, getEvents, createEvents, updateEvents, deleteEvents } from "./Event.Controller";

import { getAllFeedbacks, updateFeedback, insertFeedback } from "./Feedback.Controller";
export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	//Workout Program Controllers
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,

	//WorkoutScR controllers
	insertWorkoutScR,
	updateWorkoutScR,
	deleteWorkoutScR,
	getAllWorkoutScR,
	getOneWorkoutScR,

	//Blog Controllers
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,

	//PersonalTrainerReq Controllers
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,

	//Admin Controllers
	login,
	createUser,
	getAdminDashboard,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,

	//Workout Controllers
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,

	//Notices Controllers
	insertNotice,
	getAllNotices,
	getOneNotice,
	updateNotice,
	deleteNotice,

	//Question Controllers
	insertQuestion,
	updateQuestion,
	deleteQuestion,
	getAllQuestions,

	//Salary Controller
	insertSalary,
	updateSalary,
	getAllSalaries,
	getOneSalary,

	//Event Controllers
	getEvent,
	getEvents,
	createEvents,
	updateEvents,
	deleteEvents,

	//Trainer Controllers
	getTrainer,
	getTrainers,
	createTrainer,
	updateTrainers,
	deleteTrainers,
	//Feedback Controllers

	getAllFeedbacks,
	updateFeedback,
	insertFeedback,
};
