const requestConfigJson = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem("authToken")}` || "",
		"Content-type": "application/json",
	},
};

export default requestConfigJson;
