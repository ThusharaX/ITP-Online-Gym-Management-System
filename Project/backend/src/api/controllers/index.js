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
};