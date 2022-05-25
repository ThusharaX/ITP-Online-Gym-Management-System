import React from "react";

import Report from "./Report";

// QuestionProvider
import { QuestionProvider } from "../../contexts/QuestionContext";
import ReportBanner from "./ReportBanner";

const QuestionReport = () => {
	return (
		<div>
			<QuestionProvider>
				<ReportBanner />
				<Report />
			</QuestionProvider>
		</div>
	);
};

export default QuestionReport;
