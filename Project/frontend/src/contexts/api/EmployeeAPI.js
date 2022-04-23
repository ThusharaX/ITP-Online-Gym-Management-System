import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class EmployeeAPI {
	static getEmployeeData() {
		return axios.get(`${BASE_URL}/employee/`, requestConfig);
	}

	static addEmployee(newEmployee) {
		return axios.post(`${BASE_URL}/employee/`, newEmployee, requestConfigJson);
	}

	static deleteEmployee(id) {
		return axios.delete(`${BASE_URL}/employee/${id}`, requestConfig);
	}
}

export default EmployeeAPI;
