import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class WorkoutAPI {
	static getWorkoutData() {
		return axios.get(`${BASE_URL}/workout/`, requestConfig);
	}

	static addWorkout(newWorkout) {
		return axios.post(`${BASE_URL}/workout/`, newWorkout, requestConfigJson);
	}

	static deleteWorkout(id) {
		return axios.delete(`${BASE_URL}/workout/${id}`, requestConfig);
	}

	static editWorkout(id, newWorkout) {
		return axios.put(`${BASE_URL}/workout/${id}`, newWorkout, requestConfigJson);
	}

	static searchWorkout(search) {
		return axios.get(`${BASE_URL}/workout/search/${search}`, requestConfigJson);
	}

	static incrementViewCount(id) {
		return axios.put(`${BASE_URL}/workout/view/${id}`, requestConfigJson);
	}

	static getMostPopularWorkouts() {
		return axios.get(`${BASE_URL}/workouts/popular/`, requestConfig);
	}
}

export default WorkoutAPI;
