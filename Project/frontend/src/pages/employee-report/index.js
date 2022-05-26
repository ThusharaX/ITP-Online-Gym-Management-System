import React from "react";

import Report from "./Report";

// EmployeeProvider
import { EmployeeProvider } from "../../contexts/EmployeeContext";

const EmployeeReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Employee Report</h1>

			<EmployeeProvider>
				<Report />
			</EmployeeProvider>
		</div>
	);
};

export default EmployeeReport;
