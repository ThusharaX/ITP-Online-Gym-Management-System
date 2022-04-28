import React, { useContext } from "react";
import { Button } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";

const QuestionList = () => {
	const { questions, confirmDelete } = useContext(QuestionContext);

	return (
		<>
			<ul>
				{questions.map((item) => (
					<li key={item._id}>
						<h2>{item.title}</h2>
						<p>
							<strong>ID:</strong> {item._id}
							<br />|<strong>Email :</strong> {item.email}
							<br />|<strong>Name :</strong> {item.name}
							<br />|<strong>Question title:</strong> {item.title}
							<br />|<strong>Question:</strong> {item.content}
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

export default QuestionList;
