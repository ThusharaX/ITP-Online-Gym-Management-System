import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class BlogAPI {
	static getBlog() {
		return axios.get(`${BASE_URL}/blog/`, requestConfig);
	}

	static addBlog(newBlog) {
		return axios.post(`${BASE_URL}/blog/`, newBlog, requestConfigJson);
	}

	static deleteBlog(id) {
		return axios.delete(`${BASE_URL}/blog/${id}`, requestConfig);
	}
}

export default BlogAPI;
