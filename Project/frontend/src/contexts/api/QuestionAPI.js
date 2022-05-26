import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class QuestionAPI {
	static getQuestionData() {
		return axios.get(`${BASE_URL}/question/`, requestConfig);
	}

	static addQuestion(newQuestion) {
		return axios.post(`${BASE_URL}/question/`, newQuestion, requestConfigJson);
	}

	static deleteQuestion(id) {
		return axios.delete(`${BASE_URL}/question/${id}`, requestConfig);
	}
	static searchQuestion(search) {
		return axios.get(`${BASE_URL}/question/search/${search}`, requestConfigJson);
	}
	static editQuestion(id, newQuestion) {
		return axios.put(`${BASE_URL}/question/${id}`, newQuestion, requestConfigJson);
	}
	static addAnswer(newAnswer) {
		return axios.post(`${BASE_URL}/answer/`, newAnswer, requestConfigJson);
	}
}

export default QuestionAPI;
