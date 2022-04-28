import React, { useContext } from "react";
import { Button } from "@mantine/core";

import FeedbackContext from "../../contexts/FeedbackContext";

const FeedbackList = () => {
	const { feedbacks, confirmDelete } = useContext(FeedbackContext);

	return (
		<>
			<ul>
				{feedbacks.map((item) => (
					<li key={item._id}>
						<h2>{item.title}</h2>
						<p>
							<strong>ID:</strong> {item._id}
							<br />|<strong>Email :</strong> {item.email}
							<br />|<strong>Name :</strong> {item.displayname}
							<br />|<strong>Feedback title:</strong> {item.ftitle}
							<br />|<strong>Feedback:</strong> {item.feedback}
						</p>
						<Button onClick={() => confirmDelete(item._id)} color="red" compact>
							Delete
						</Button>
					</li>
				))}
			</ul>
		</>
	);
};

export default FeedbackList;
