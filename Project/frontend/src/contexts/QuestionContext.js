import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import QuestionAPI from "./api/QuestionAPI";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);

	// Get all questions
	useEffect(() => {
		QuestionAPI.getQuestionData().then((response) => {
			setQuestions(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			title: "",
			content: "",
		},
	});

	// Add new question
	const addQuestion = (values) => {
		const newQuestion = {
			title: values.title,
			content: values.content,
			email: values.email,
			name: values.name,
		};
		QuestionAPI.addQuestion(newQuestion).then((response) => {
			setQuestions([...questions, response.data]);
			form.reset();
		});
	};

	//edit question
	const editQuestion = (values) => {
		const editedQuestion = {
			title: values.title,
			content: values.content,
			email: values.email,
			name: values.name,
		};
		QuestionAPI.editQuestion(editedQuestion).then((response) => {
			setQuestions(questions.map((question) => (question.id === response.data.id ? response.data : question)));
			form.reset();
		});
	};
	//edit question modal
	const [editOpened, setEditOpened] = useState(false);

	// Delete question and update UI
	const deleteQuestion = (id) => {
		QuestionAPI.deleteQuestion(id).then(() => {
			setQuestions(questions.filter((question) => question._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Question",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this question? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete question", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteQuestion(id),
		});

	return (
		<QuestionContext.Provider
			value={{ questions, confirmDelete, addQuestion, editQuestion, form, editOpened, setEditOpened }}
		>
			{children}
		</QuestionContext.Provider>
	);
}

export default QuestionContext;
