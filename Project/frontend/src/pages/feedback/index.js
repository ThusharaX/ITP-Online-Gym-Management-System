import React from "react";

// Page components
import FeedbackList from "./FeedbackList";
import AddFeedback from "./AddFeedback";
import HeroImageBackground from "./HeroImageBackground";
import Search from "./Search";
import FeedbackTableScrollArea from "./FeedbackTableScrollArea";
// FeedbackProvider
import { FeedbackProvider } from "../../contexts/FeedbackContext";

const Feedback = () => {
	return (
		<div
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1620595324936-b17d3ce50073?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				height: "100%",
				width: "100%",
				// height: "100vh",
			}}
		>
			<FeedbackProvider>
				<HeroImageBackground />
				{/* Feedback list */}
				<FeedbackList />
				{/* Add new Feedback */}
				<AddFeedback />
				<Search />
				<FeedbackTableScrollArea />
			</FeedbackProvider>
		</div>
	);
};

export default Feedback;
