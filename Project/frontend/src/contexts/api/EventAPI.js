import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class EventAPI {
	// static addEvent(newEvent) {
	// 	return axios.post(`${BASE_URL}/event/`, newEvent, requestConfigJson);
	// }

	// static deleteEvent(id) {
	// 	return axios.delete(`${BASE_URL}/event/${id}`, requestConfig);
	// }

	// static editEvent(id, newEvent) {
	// 	return axios.put(`${BASE_URL}/event/${id}`, newEvent, requestConfigJson);
	// }

	static searchEvent(search) {
		return axios.get(`${BASE_URL}/events/?search=${search}`, requestConfigJson);
	}
	// static getEventData() {
	// 	return axios.get(`${BASE_URL}/events/`, requestConfig);
	// }
}

export default EventAPI;
