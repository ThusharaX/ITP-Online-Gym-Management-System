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

	/*	static getOneWorkoutData(ID) {
		return axios.get(`${BASE_URL}/workoutScr/${ID}`, requestConfig);
	} */

	static getOneWorkoutData() {
		return axios.get(`${BASE_URL}/workoutScr/${localStorage.getItem("uID")}`, requestConfig);
	}

	static editWorkoutScR(id, newWorkoutScR) {
		return axios.put(`${BASE_URL}/workoutScr/${id}`, newWorkoutScR, requestConfigJson);
	}
}

export default WorkoutScRAPI;
