import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

import QuestionAPI from "./api/QuestionAPI";
import Joi from "joi";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);

	//question
	const [question, setQuestion] = useState({
		email: "",
		name: "",
		title: "",
		content: "",
	});

	// //form validation
	// const schema = Joi.object({
	// 	email: Joi.string().email().required(),
	// 	name: Joi.string().required(),
	// 	title: Joi.string().required(),
	// 	content: Joi.string().required(),
	// });

	// Get all questions
	useEffect(() => {
		QuestionAPI.getQuestionData().then((response) => {
			setQuestions(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		// schema:joiResolver(schema),
		initialValues: {
			email: "",
			name: "",
			title: "",
			content: "",
		},
	});

	//answer form initial state
	const answerForm = useForm({
		initialValues: {
			answer: "",
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

	//add new answer
	const addAnswer = (values) => {
		const newAnswer = {
			answer: [],
		};
		QuestionAPI.addAnswer(newAnswer).then((response) => {
			setQuestions([...questions, response.data]);
			form.reset();
		});
	};

	//edit question
	const editQuestion = (values) => {
		const newQuestion = {
			title: values.title,
			content: values.content,
			email: values.email,
			name: values.name,
		};
		QuestionAPI.editQuestion(values.id, newQuestion).then((response) => {
			setQuestions(questions.map((question) => (question.id === values.id ? response.data : question)));
			form.reset();
		});
	};

	//Add Question Modal
	const [opened, setOpened] = useState(false);

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
			value={{
				questions,
				setQuestion,
				addQuestion,
				question,
				setQuestions,
				// schema,
				setOpened,
				opened,
				confirmDelete,
				addQuestion,
				editQuestion,
				addAnswer,
				answerForm,
				form,
				editOpened,
				setEditOpened,
			}}
		>
			{children}
		</QuestionContext.Provider>
	);
}

export default QuestionContext;
