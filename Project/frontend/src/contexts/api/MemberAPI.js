import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class UserAPI {
	static MemberLogin(values) {
		return axios.post(`${BASE_URL}/user/login/`, values, requestConfigJson);
	}

	static MemberRegister(values) {
		return axios.post(`${BASE_URL}/user/register/`, values, requestConfigJson);
	}

	static getMemberData(id) {
		return axios.get(`${BASE_URL}/user/${id}`, requestConfigJson);
	}

	static getMembers() {
		return axios.get(`${BASE_URL}/member/`, requestConfig);
	}

	static deleteMember(id) {
		return axios.delete(`${BASE_URL}/user/${id}`, requestConfig);
	}

	static editMember(id, newMember) {
		return axios.put(`${BASE_URL}/user/${id}`, newMember, requestConfigJson);
	}

	static searchMember(search) {
		return axios.get(`${BASE_URL}/member/search/${search}`, requestConfigJson);
	}
}

export default UserAPI;
