import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import BlogAPI from "./api/BlogAPI";

const BlogContext = createContext();

export function BlogProvider({ children }) {
	// Blogss
	const [blogs, setBlogs] = useState([]);

	const [blog, setBlog] = useState({
		trname: "",
		title: "",
		description: "",
		fb: "",
		wNum: "",
		email: "",
		monday: "",
		tuesday: "",
		wednesday: "",
		thursday: "",
		friday: "",
		saturday: "",
		sunday: "",
	});

	// Get all Blogs
	useEffect(() => {
		BlogAPI.getBlogData().then((response) => {
			setBlogs(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			trname: "",
			title: "",
			description: "",
			fb: "",
			wNum: "",
			email: "",
			monday: "",
			tuesday: "",
			wednesday: "",
			thursday: "",
			friday: "",
			saturday: "",
			sunday: "",
		},
	});

	// Add new blog
	const addBlog = (values) => {
		const newBlog = {
			//workout_name: values.workout_name,
			trname: values.trname,
			title: values.title,
			description: values.description,
			fb: values.fb,
			wNum: values.wNum,
			email: values.email,
			monday: values.monday,
			tuesday: values.tuesday,
			wednesday: values.wednesday,
			thursday: values.thursday,
			friday: values.friday,
			saturday: values.saturday,
			sunday: values.sunday,
		};
		BlogAPI.addBlog(newBlog).then((response) => {
			setBlogs([...blogs, response.data]);
			form.reset();
		});
	};

	// AddBlog Modal
	const [opened, setOpened] = useState(false);

	// Delete blog and update UI
	const deleteBlog = (id) => {
		BlogAPI.deleteBlog(id).then(() => {
			setBlogs(blogs.filter((blog) => blog._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Blog",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this blog? This action is destructive and cannot be undone.
				</Text>
			),
			labels: {
				confirm: "Delete blog",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteBlog(id),
		});

	// Edit blog
	const editBlog = (values) => {
		const newBlog = {
			//workout_name: values.workout_name,
			trname: values.trname,
			title: values.title,
			description: values.description,
			fb: values.fb,
			wNum: values.wNum,
			email: values.email,
			monday: values.monday,
			tuesday: values.tuesday,
			wednesday: values.wednesday,
			thursday: values.thursday,
			friday: values.friday,
			saturday: values.saturday,
			sunday: values.sunday,
		};
		BlogAPI.editBlog(values.id, newBlog).then((response) => {
			setBlogs(blogs.map((blog) => (blog._id === values.id ? response.data : blog)));
			form.reset();
		});
	};

	// editBlog Modal
	const [editOpened, setEditOpened] = useState(false);

	// View Count increment
	// const incrementViewCount = (id) => {
	// 	WorkoutAPI.incrementViewCount(id).then((response) => {
	// 		setWorkouts(workouts.map((workout) => (workout._id === id ? response.data : workout)));
	// 	});
	// };

	return (
		<BlogContext.Provider
			value={{
				blogs,
				setBlogs,
				confirmDelete,
				form,
				addBlog,
				opened,
				setOpened,
				editBlog,
				editOpened,
				setEditOpened,
				blog,
				setBlog,
			}}
		>
			{children}
		</BlogContext.Provider>
	);
}

export default BlogContext;

// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// // Mantine imports
// import { Text } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import { useModals } from "@mantine/modals";

// import BlogAPI from "./api/BlogAPI";

// const BlogContext = createContext();

// export function BlogProvider({ children }) {
// 	const [blog, setBlog] = useState([]);

// 	// Get all samples
// 	useEffect(() => {
// 		BlogAPI.getBlog().then((response) => {
// 			setBlog(response.data);
// 		});
// 	}, []);

// 	// Form initial state
// 	const form = useForm({
// 		initialValues: {
// 			trname: "",
// 			title: "",
// 			description: "",
// 			fb: "",
// 			wNum: "",
// 			email: "",
// 			monday: "",
// 			tuesday: "",
// 			wednesday: "",
// 			thursday: "",
// 			friday: "",
// 			saturday: "",
// 			sunday: "",
// 		},
// 	});

// 	// Add new sample
// 	const AddBlog = (values) => {
// 		const newBlog = {
// 			trname: values.trname,
// 			title: values.title,
// 			description: values.description,
// 			fb: values.fb,
// 			wNum: values.wNum,
// 			email: values.email,
// 			monday: values.monday,
// 			tuesday: values.tuesday,
// 			wednesday: values.wednesday,
// 			thursday: values.thursday,
// 			friday: values.friday,
// 			saturday: values.saturday,
// 			sunday: values.sunday,
// 		};
// 		// const newBlog = {
// 		// 	trname: "values.trname",
// 		// 	title: "values.title",
// 		// 	description: "values.description",
// 		// 	fb: "values.fb",
// 		// 	wNum: "values.wNum",
// 		// 	email: " values.email",
// 		// 	monday: " values.monday",
// 		// 	tuesday: "values.tuesday",
// 		// 	wednesday: "values.wednesday",
// 		// 	thursday: "values.thursday",
// 		// 	friday: "values.friday",
// 		// 	saturday: "values.saturday",
// 		// 	sunday: "values.sunday",
// 		// };
// 		BlogAPI.AddBlog(newBlog).then((response) => {
// 			setBlog([...blog, response.data]);
// 			form.reset();
// 		});
// 	};

// 	// Delete sample and update UI
// 	const deleteBlog = (id) => {
// 		BlogAPI.deleteBlog(id).then(() => {
// 			setBlog(blog.filter((blog) => blog._id !== id));
// 		});
// 	};

// 	//sDelete confirmation modal
// 	const modals = useModals();
// 	const confirmDelete = (id) =>
// 		modals.openConfirmModal({
// 			title: "Delete Blog",
// 			centered: true,
// 			children: (
// 				<Text size="sm">
// 					Are you sure you want to delete this sample? This action is destructive and cannot be undone.
// 				</Text>
// 			),
// 			labels: { confirm: "Delete blog", cancel: "No don't delete it" },
// 			confirmProps: { color: "red" },
// 			// eslint-disable-next-line no-console
// 			onCancel: () => console.log("Cancel"),
// 			onConfirm: () => deleteBlog(id),
// 		});

// 	return <BlogContext.Provider value={{ blog, AddBlog, form }}>{children}</BlogContext.Provider>;
// }

// export default BlogContext;
