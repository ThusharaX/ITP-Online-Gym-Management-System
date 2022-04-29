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

	static editSalary(id, newSalary) {
		return axios.put(`${BASE_URL}/salary/${id}`, newSalary, requestConfigJson);
	}

	static searchSalary(search) {
		return axios.get(`${BASE_URL}/salary/search/${search}`, requestConfigJson);
	}
}

export default SalaryAPI;
