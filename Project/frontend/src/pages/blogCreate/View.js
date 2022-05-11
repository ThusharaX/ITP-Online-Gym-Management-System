import React, { useContext } from "react";

import BlogContext from "../../contexts/BlogContext";

const View = () => {
	const { blog } = useContext(BlogContext);
	return (
		<div>
			<h1>{blog.trname}</h1>
			<h2>{blog.title}</h2>
			<h3>{blog.description}</h3>
			{/* Image Size: 300x300 */}
			{/* <img src={workout.starting_position_img} alt="Starting Position" style={{ width: 400, height: 300 }} />
			<img src={workout.mid_position_img} alt="Mid Position" style={{ width: 400, height: 300 }} /> */}
			<p>Description: {blog.description}</p>
			{/* <p>Action: {workout.action}</p>
			<p>Tips: {workout.tips}</p> */}
		</div>
	);
};

export default View;
