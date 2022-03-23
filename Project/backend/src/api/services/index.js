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
    authAdmin,
} from "./Admin.service";

import {
    insertWorkout,
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

    // Admin services
    authAdmin,

    // Workout services
    insertWorkout,
};