import React from "react";
import Joi from "joi";
// Page components
import BlogList from "./blogCard";
import ReactCard from "./ReactCard";

// SampleProvider
import { BlogProvider } from "../../contexts/BlogContext";

const BlogsList = () => {
	return (
		<BlogProvider>
			<BlogsList />
		</BlogProvider>
	);
};

const Blogs = () => {
	return (
		<BlogProvider>
			<ReactCard />
		</BlogProvider>
	);
};

export { Blogs, BlogsList };
