// import React from "react";

// // Page Components

// import AddBlog from "./AddBlog";
// import EditBlog from "./EditBlog";

// // Blog Provider
// import { BlogProvider } from "../../contexts/BlogContext";

// const Blogs = () => {
// 	return (
// 		<div>
// 			<h1>Blog</h1>

// 			<BlogProvider>
// 				<AddBlog />
// 			</BlogProvider>
// 		</div>
// 	);
// };

// const BlogUpdate = () => {
// 	return (
// 		<div>
// 			<h1>Blog Update</h1>

// 			<BlogProvider>
// 				<EditBlog />
// 			</BlogProvider>
// 		</div>
// 	);
// };

// export { Blogs, BlogUpdate };

import React from "react";

// Page components
import BlogList from "./BlogList";
import AddBlogModal from "./AddBlogModal";

// BlogProvider
import { BlogProvider } from "../../contexts/BlogContext";

import { SimpleGrid } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

const BD = () => {
	return (
		<div>
			{/* <h1 style={{ textAlign: "center" }}>Personal Trainer Details</h1> */}

			<NotificationsProvider>
				<BlogProvider>
					{/* <Search /> */}

					{/* <AddBlogModal /> */}

					{/* <SimpleGrid
						cols={4}
						spacing="lg"
						breakpoints={[
							{ maxWidth: 1350, cols: 3, spacing: "md" },
							{ maxWidth: 1020, cols: 2, spacing: "sm" },
							{ maxWidth: 675, cols: 1, spacing: "sm" },
						]}
					> */}
					<BlogList />
					<AddBlogModal />
					{/* </SimpleGrid> */}
				</BlogProvider>
			</NotificationsProvider>
		</div>
	);
};

export default BD;
