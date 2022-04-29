import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class NoticeAPI {
	static getNoticeData() {
		return axios.get(`${BASE_URL}/notice/`, requestConfig);
	}

	static addNotice(newNotice) {
		return axios.post(`${BASE_URL}/notice/`, newNotice, requestConfigJson);
	}

	static deleteNotice(id) {
		return axios.delete(`${BASE_URL}/notice/${id}`, requestConfig);
	}

	static editNotice(id, newNotice) {
		return axios.put(`${BASE_URL}/notice/${id}`, newNotice, requestConfigJson);
	}
}

export default NoticeAPI;
