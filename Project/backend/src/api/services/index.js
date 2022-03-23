import {
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,
} from "./Sample.service";

import {
    authAdmin,
} from "./Admin.service";

import {
    insertWorkoutScR,
    updateWorkoutScR,
    deleteWorkoutScR,
    getAllWorkoutScR,

}from "./WorkoutScR.service";

export default {
    // Sample services
    insertSample,
    getAllSamples,
    getOneSample,
    updateSample,
    deleteSample,
    searchSamples,

    // Workout Services
    insertWorkoutScR,
    updateWorkoutScR,
    deleteWorkoutScR,
    getAllWorkoutScR,
    // Admin services
    authAdmin,
};