import React, { useContext } from "react";
import { Button } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";

const QuestionList = () => {
	const { questions, confirmDelete } = useContext(QuestionContext);

	return (
		<>
			<ul>
				{/* Sort questions by createdAt */}
				{questions
					.sort((a, b) => a.createdAt - b.createdAt)
					.map((question) => (
						<li key={question._id}>
							<h2>{question.title}</h2>
							<p>
								<strong>ID:</strong> {question._id}
								<br />|<strong>Email :</strong> {question.email}
								<br />|<strong>Name :</strong> {question.name}
								<br />|<strong>Question title:</strong> {question.title}
								<br />|<strong>Question:</strong> {question.content}
							</p>
							<Button onClick={() => confirmDelete(question._id)} color="red" compact>
								Delete
							</Button>
						</li>
					))}
			</ul>
		</>
	);
};

export default QuestionList;
