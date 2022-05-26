import React from "react";

import Report from "./Report";

// SalaryProvider
import { SalaryProvider } from "../../contexts/SalaryContext";

const SalaryReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Salary Report</h1>

			<SalaryProvider>
				<Report />
			</SalaryProvider>
		</div>
	);
};

export default SalaryReport;
