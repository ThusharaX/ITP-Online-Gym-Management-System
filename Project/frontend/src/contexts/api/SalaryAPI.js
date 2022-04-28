import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class SalaryAPI {
	static getSalaryData() {
		return axios.get(`${BASE_URL}/salary/`, requestConfig);
	}

	static addSalary(newSalary) {
		return axios.post(`${BASE_URL}/salary/`, newSalary, requestConfigJson);
	}

	/*static updateSample(id) {
		return axios.delete(`${BASE_URL}/salary/${id}`, requestConfig);
	}*/
}

export default SalaryAPI;
