import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class WorkoutProgramAPI {
	static getWorkoutProgramData() {
		return axios.get(`${BASE_URL}/workoutProgram/`, requestConfig);
	}

	static addWorkoutProgram(newWorkoutProgram) {
		return axios.post(`${BASE_URL}/workoutProgram/`, newWorkoutProgram, requestConfigJson);
	}

	static deleteWorkoutProgram(id) {
		return axios.delete(`${BASE_URL}/workoutProgram/${id}`, requestConfig);
	}
}

export default WorkoutProgramAPI;
