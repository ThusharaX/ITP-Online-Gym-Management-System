import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class WorkoutAPI {
	static getWorkoutData() {
		return axios.get(`${BASE_URL}/workout/`, requestConfig);
	}

	static addWorkout(newWorkout) {
		return axios.post(`${BASE_URL}workout/`, newWorkout, requestConfigJson);
	}
	static deleteWorkout(id) {
		return axios.delete(`${BASE_URL}/workout/${id}`, requestConfig);
	}
}

export default WorkoutAPI;
