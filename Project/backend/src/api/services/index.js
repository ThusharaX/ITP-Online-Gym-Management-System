import {
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,
} from "./Sample.service";

import {
    insertTrainerBD,
    getAllTrainerBD,
    getOneTrainerBD,
    updateTrainerBD,
    deleteTrainerBD,

} from "./TrainerBD.service";

import {
    insertSalary,
    updateSalary,
    getAllSalaries,
    getOneSalary,
} from "./Salary.service";

import {
    authAdmin,
} from "./Admin.service";

import {
    insertWorkout,
    getAllWorkouts,
    getOneWorkout,
    updateworkout,
    deleteWorkout,
    searchWorkouts,
} from "./Workout.service";

import {
    insertQuestion,
    updateQuestion,
    deleteQuestion,
    getAllQuestions,
} from "./Question.service";

export default {
    // Sample services
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

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
    authAdmin,

    // Workout services
    insertWorkout,
    getAllWorkouts,
    getOneWorkout,
    updateworkout,
    deleteWorkout,
    searchWorkouts,
};