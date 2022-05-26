import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class UserAPI {
	static login(values) {
		return axios.post(`${BASE_URL}/user/login/`, values, requestConfigJson);
	}

	static register(values) {
		return axios.post(`${BASE_URL}/user/register/`, values, requestConfigJson);
	}

	static getUserDetails(uid) {
		return axios.get(`${BASE_URL}/user/${uid}/`, requestConfig);
	}

	static deleteUser(uid) {
		return axios.delete(`${BASE_URL}/user/${uid}/`, requestConfig);
	}

	static getUsersEmployee() {
		return axios.get(`${BASE_URL}/employee/`, requestConfig);
	}

	static editUser(uid, newUser) {
		return axios.put(`${BASE_URL}/user/${uid}`, newUser, requestConfigJson);
	}

	static searchUser(search) {
		return axios.get(`${BASE_URL}/employee/search/${search}`, requestConfigJson);
	}
}

export default UserAPI;
