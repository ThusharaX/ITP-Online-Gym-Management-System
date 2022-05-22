import React from "react";

// Page components
import FeedbackList from "./FeedbackList";
import AddFeedback from "./AddFeedback";

// FeedbackProvider
import { FeedbackProvider } from "../../contexts/FeedbackContext";

const Feedback = () => {
	return (
		<div
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1600026453194-11ae289732b8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				height: "100vh",
			}}
		>
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
