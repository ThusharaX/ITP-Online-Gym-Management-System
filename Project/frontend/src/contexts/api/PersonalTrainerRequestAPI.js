import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class PersonalTrainerRequestAPI {
	static getRequestData() {
		return axios.get(`${BASE_URL}/personal/`, requestConfig);
	}

	static addRequest(newRequest) {
		return axios.post(`${BASE_URL}/personal/`, newRequest, requestConfigJson);
	}

	static deleteRequest(id) {
		return axios.delete(`${BASE_URL}/personal/${id}`, requestConfig);
	}
	static editRequest(id, newRequest) {
		return axios.put(`${BASE_URL}/personal/${id}`, newRequest, requestConfigJson);
	}
	static searchRequest(search) {
		return axios.get(`${BASE_URL}/personal/search/${search}`, requestConfigJson);
	}
}

export default PersonalTrainerRequestAPI;
