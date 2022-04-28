import React from "react";

// Page components
import FeedbackList from "./FeedbackList";
import AddFeedback from "./AddFeedback";

// FeedbackProvider
import { FeedbackProvider } from "../../contexts/FeedbackContext";

const Feedback = () => {
	return (
		<div>
			<h1 align="center">Feedback Page</h1>

			<FeedbackProvider>
				{/* Feedback list */}
				<FeedbackList />

				{/* Add new Feedback */}
				<AddFeedback />
			</FeedbackProvider>
		</div>
	);
};

export default Feedback;
