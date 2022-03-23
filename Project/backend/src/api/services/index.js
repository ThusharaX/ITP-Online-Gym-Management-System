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

    // Admin services
    authAdmin,

    // Workout services
    insertWorkout,
};