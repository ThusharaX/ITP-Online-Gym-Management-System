import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class SampleAPI {
	static getSampleData() {
		return axios.get(`${BASE_URL}/sample/`, requestConfig);
	}

	static addSample(newSample) {
		return axios.post(`${BASE_URL}/sample/`, newSample, requestConfigJson);
	}

	static deleteSample(id) {
		return axios.delete(`${BASE_URL}/sample/${id}`, requestConfig);
	}
}

export default SampleAPI;
