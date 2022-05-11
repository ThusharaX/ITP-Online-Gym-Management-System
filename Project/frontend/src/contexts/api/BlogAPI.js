import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

class BlogAPI {
	static getBlogData() {
		return axios.get(`${BASE_URL}/blog/`, requestConfig);
	}

	static addBlog(newBlog) {
		return axios.post(`${BASE_URL}/blog/`, newBlog, requestConfigJson);
	}

	static deleteBlog(id) {
		return axios.delete(`${BASE_URL}/blog/${id}`, requestConfig);
	}

	static editBlog(id, newBlog) {
		return axios.put(`${BASE_URL}/blog/${id}`, newBlog, requestConfigJson);
	}

	// static searchWorkout(search) {
	// 	return axios.get(`${BASE_URL}/workout/search/${search}`, requestConfigJson);
	// }

	// static incrementViewCount(id) {
	// 	return axios.put(`${BASE_URL}/workout/view/${id}`, requestConfigJson);
	// }
}

export default BlogAPI;

// import axios from "axios";
// import requestConfig from "./config";
// import requestConfigJson from "./configJson";

// const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

// class BlogAPI {
// 	static getBlog() {
// 		return axios.get(`${BASE_URL}/blog/`, requestConfig);
// 	}

// 	static addBlog(newBlog) {
// 		return axios.post(`${BASE_URL}/blog/`, newBlog, requestConfigJson);
// 	}

// 	static deleteBlog(id) {
// 		return axios.delete(`${BASE_URL}/blog/${id}`, requestConfig);
// 	}
// }

// export default BlogAPI;
