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
		<div>
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
