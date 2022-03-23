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

import {
    insertQuestion,
    updateQuestion,
    deleteQuestion,
    getAllQuestions
} from "./Question.controller";

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

    //Question Controllers
    insertQuestion,
    updateQuestion,
    deleteQuestion,
    getAllQuestions,
};