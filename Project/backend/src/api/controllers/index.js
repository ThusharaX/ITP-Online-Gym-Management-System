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

import { authAdmin, createAdmin } from "./Admin.controller";

import { insertWorkoutScR, updateWorkoutScR, deleteWorkoutScR, getAllWorkoutScR } from "./WorkoutScR.Controller";

import {
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	searchWorkouts,
} from "./Workout.controller";

import { insertNotice, getAllNotices, getOneNotice, updateNotice, deleteNotice } from "./Notice.Controller";

import { insertQuestion, updateQuestion, deleteQuestion, getAllQuestions } from "./Question.controller";

import { insertSalary, updateSalary, getAllSalaries, getOneSalary } from "./Salary.controller";

import { getTrainer, getTrainers, createTrainers, updateTrainers, deleteTrainers } from "./Trainer.Controller";

import { getEvent, getEvents, createEvents, updateEvents, deleteEvents } from "./Event.Controller";

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

	//Blog Controllers
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,

	//Admin Controllers
	authAdmin,
	createAdmin,

	//Workout Controllers
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateWorkout,
	deleteWorkout,
	searchWorkouts,

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
	createTrainers,
	updateTrainers,
	deleteTrainers,
};
