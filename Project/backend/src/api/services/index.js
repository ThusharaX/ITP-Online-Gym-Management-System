import { insertSample, getAllSamples, getOneSample, updateSample, deleteSample, searchSamples } from "./Sample.service";

import {
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,
} from "./WorkoutProgram.service";

import {
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,
} from "./TrainerBD.service";

import {
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,
} from "./PersonalTrainerReq.service";

import { insertSalary, updateSalary, getAllSalaries, getOneSalary } from "./Salary.service";

import {
	authenticateUser,
	insertUser,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,
} from "./User.service";

import { insertWorkoutScR, updateWorkoutScR, deleteWorkoutScR, getAllWorkoutScR } from "./WorkoutScR.service";

import {
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateworkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,
} from "./Workout.service";

import { insertNotice, getAllNotices, getOneNotice, updateNotice, deleteNotice } from "./Notice.service";

import { insertQuestion, updateQuestion, deleteQuestion, getAllQuestions } from "./Question.service";

import { updateEvents, deleteEvents, createEvents, getEvent, getEvents } from "./Event.service";

import { insertFeedback, getAllFeedbacks, updateFeedback } from "./Feedback.service";
export default {
	// Sample services
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	// Workout Program services
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,

	// Workout Services
	insertWorkoutScR,
	updateWorkoutScR,
	deleteWorkoutScR,
	getAllWorkoutScR,

	//question services
	insertQuestion,
	updateQuestion,
	deleteQuestion,
	getAllQuestions,

	//Blog services
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,

	//salary services
	insertSalary,
	updateSalary,
	getAllSalaries,
	getOneSalary,

	// Admin services
	authenticateUser,
	insertUser,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,

	// Workout services
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateworkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,

	//Notice Services
	insertNotice,
	getAllNotices,
	getOneNotice,
	updateNotice,
	deleteNotice,

	// Event services
	getEvent,
	getEvents,
	updateEvents,
	deleteEvents,
	createEvents,

	//PersonalRequest services
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,

	//Feedback services
	insertFeedback,
	getAllFeedbacks,
	updateFeedback,
};
