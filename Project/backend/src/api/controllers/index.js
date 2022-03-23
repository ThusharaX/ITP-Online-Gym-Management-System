import {
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,
} from "./Sample.controller";

import {
    insertTrainerBD,
    getAllTrainerBD,
    getOneTrainerBD,
    updateTrainerBD,
    deleteTrainerBD,
    
} from "./TrainerBD.controller";

import {
    authAdmin,
    createAdmin,
} from "./Admin.controller";

import {
    insertWorkout,
} from "./Workout.controller";

export default {
    //Sample Controllers
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

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
};