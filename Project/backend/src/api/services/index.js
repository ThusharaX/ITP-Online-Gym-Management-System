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

export default {
    // Sample services
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

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