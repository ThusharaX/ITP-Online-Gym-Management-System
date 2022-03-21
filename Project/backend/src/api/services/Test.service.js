// import TestModel from "../models/Test.model";
import axios from "axios";

export const getTest = async (endPoint) => {
	return await axios.get(`https://jsonplaceholder.typicode.com/${endPoint}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};