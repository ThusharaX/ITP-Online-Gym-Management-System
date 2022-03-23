import {
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,
} from "./Sample.controller";

import {
    authAdmin,
    createAdmin,
} from "./Admin.controller";

import {
    insertWorkout,
    getAllWorkouts,
    getOneWorkout,
    updateWorkout,
    deleteWorkout,
    searchWorkouts,
} from "./Workout.controller";

export default {
    //Sample Controllers
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

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
};