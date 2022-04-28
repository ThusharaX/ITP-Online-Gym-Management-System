import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import FeedbackAPI from "./api/FeedbackAPI";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
	const [feedbacks, setFeedbacks] = useState([]);

	// Get all feedbacks
	useEffect(() => {
		FeedbackAPI.getFeedbackData().then((response) => {
			setFeedbacks(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			email: "",
			displayname: "",
			ftitle: "",
			feedback: "",
		},
	});

	// Add new feedback
	const addFeedback = (values) => {
		const newFeedback = {
			ftitle: values.ftitle,
			feedback: values.feedback,
			email: values.email,
			displayname: values.displayname,
		};
		FeedbackAPI.addFeedback(newFeedback).then((response) => {
			setFeedbacks([...feedbacks, response.data]);
			form.reset();
		});
	};

	// Delete feedback and update UI
	const deleteFeedback = (id) => {
		FeedbackAPI.deleteFeedback(id).then(() => {
			setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			ftitle: "Delete Feedback",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this feedback? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete feedback", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteFeedback(id),
		});

	return (
		<FeedbackContext.Provider value={{ feedbacks, confirmDelete, addFeedback, form }}>
			{children}
		</FeedbackContext.Provider>
	);
}

export default FeedbackContext;
