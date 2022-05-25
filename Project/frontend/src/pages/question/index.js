import React from "react";

// Page components
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";
import FAQ from "./FAQ";
import FAQQ from "./FAQQ";

// QuestionProvider
import { QuestionProvider } from "../../contexts/QuestionContext";

const Question = () => {
	return (
		<div
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)",
				backgroundSize: "1300px",
				height: "100%",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",

				// height: "100vh",
			}}
		>
			<FAQQ />
			<QuestionProvider>
				{/* Question list */}
				<QuestionList />

				{/* Add new Question */}
				<AddQuestion />
			</QuestionProvider>
			{/* <FAQ /> */}
		</div>
	);
};

export default Question;
