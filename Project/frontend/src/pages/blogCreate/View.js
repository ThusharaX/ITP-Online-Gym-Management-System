import React, { useContext } from "react";

import BlogContext from "../../contexts/BlogContext";

const View = () => {
	const { blog } = useContext(BlogContext);
	return (
		<div>
			<h1>Trainer Name : {blog.trname}</h1>
			<img
				src="https://images.pexels.com/photos/5799855/pexels-photo-5799855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="Mid Position"
				style={{ width: 450, height: 300 }}
			/>
			<h3>Title : {blog.title}</h3>
			<h3>Email : {blog.email}</h3>
			<h3>Phone Number : {blog.wNum}</h3>
			<h3>Facebook : {blog.fb}</h3>
			{/* Image Size: 300x300 */}
			{/* <img src={workout.starting_position_img} alt="Starting Position" style={{ width: 400, height: 300 }} />
			<img src={workout.mid_position_img} alt="Mid Position" style={{ width: 400, height: 300 }} /> */}
			<p>Description : {blog.description}</p>
			{/* <p>Action: {workout.action}</p>
			<p>Tips: {workout.tips}</p> */}
		</div>
	);
};

export default View;
