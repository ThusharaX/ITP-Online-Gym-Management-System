import axios from "axios";
import requestConfig from "./config";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class DashboardAPI {
	static getDashboardData() {
		return axios.get(`${BASE_URL}/user/dashboard/`, requestConfig);
	}
}

export default DashboardAPI;
