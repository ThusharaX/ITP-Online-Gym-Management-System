const requestConfig = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem("authToken")}` || "",
		"Content-type": "multipart/form-data",
	},
};

export default requestConfig;
