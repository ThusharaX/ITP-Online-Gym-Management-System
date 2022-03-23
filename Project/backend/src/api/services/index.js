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

    // Admin services
    authAdmin,

    // Workout services
    insertWorkout,
};