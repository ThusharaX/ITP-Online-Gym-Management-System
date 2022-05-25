import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class WorkoutScRAPI {
	static getWorkoutScRData() {
		return axios.get(`${BASE_URL}/workoutScrlist/`, requestConfig);
	}

	static addWorkoutScR(newWorkoutScR) {
		return axios.post(`${BASE_URL}/workoutScr/`, newWorkoutScR, requestConfigJson);
	}

	static deleteWorkoutScR(id) {
		return axios.delete(`${BASE_URL}/workoutScr/${id}`, requestConfig);
	}

	static getOneWorkoutData(id) {
		return axios.get(`${BASE_URL}/workoutScr/${id}`, requestConfig);
	}
}

export default WorkoutScRAPI;
