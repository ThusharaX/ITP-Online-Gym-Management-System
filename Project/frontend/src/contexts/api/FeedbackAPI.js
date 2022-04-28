import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class FeedbackAPI {
	static getFeedbackData() {
		return axios.get(`${BASE_URL}/feedback/`, requestConfig);
	}

	static addFeedback(newFeedback) {
		return axios.post(`${BASE_URL}/feedback/`, newFeedback, requestConfigJson);
	}

	static deleteFeedback(id) {
		return axios.delete(`${BASE_URL}/feedback/${id}`, requestConfig);
	}
}

export default FeedbackAPI;
