import React from "react";

// Page components
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";
import FAQQ from "./FAQQ";
import Search from "./Search";
import HeroImageBackground from "./Banner";
import QuestionTableScrollArea from "./DisplayquestionList";
// QuestionProvider
import { QuestionProvider } from "../../contexts/QuestionContext";

const Question = () => {
	return (
		<div
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1608311397926-af25e955eb4a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327)",
				backgroundSize: "1300px",
				height: "100%",
				backgroundPosition: "center",

				// height: "100vh",
			}}
		>
			<QuestionProvider>
				<HeroImageBackground />
				<QuestionList />
				<FAQQ />
				<AddQuestion />
				<Search />
				<QuestionTableScrollArea />
			</QuestionProvider>
		</div>
	);
};

export default Question;
