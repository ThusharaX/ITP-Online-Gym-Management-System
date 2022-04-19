import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class TrainerAPI {
	static getTrainerData() {
		return axios.get(`${BASE_URL}/trainers/`, requestConfig);
	}

	static addTrainer(newTrainer) {
		return axios.post(`${BASE_URL}/trainers/`, newTrainer, requestConfigJson);
	}

	static deleteTrainer(id) {
		return axios.delete(`${BASE_URL}/trainers/${id}`, requestConfig);
	}
}

export default TrainerAPI;
