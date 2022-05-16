import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class TrainerAPI {
	static login(values) {
		return axios.post(`${BASE_URL}/user/login/`, values, requestConfigJson);
	}

	static register(values) {
		return axios.post(`${BASE_URL}/trainer/register/`, values, requestConfigJson);
	}

	static getTrainerData(id) {
		return axios.get(`${BASE_URL}/trainer/${id}`, requestConfig);
	}

	static deleteTrainer(id) {
		return axios.delete(`${BASE_URL}/trainer/${id}`, requestConfig);
	}
	static updateTrainer(id) {
		return axios.put(`${BASE_URL}/trainers/${id}`, requestConfig);
	}
}

export default TrainerAPI;
