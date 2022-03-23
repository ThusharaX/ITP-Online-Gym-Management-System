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

import{
    insertWorkoutScR,
    updateWorkoutScR,
    deleteWorkoutScR,
    getAllWorkoutScR,
}from "./WorkoutScR.Controller";

export default {
    //Sample Controllers
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

    //Workout controllers
    insertWorkoutScR,
    updateWorkoutScR,
    deleteWorkoutScR,
    getAllWorkoutScR,

    //Admin Controllers
    authAdmin,
    createAdmin,
};