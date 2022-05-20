import React from "react";

import Report from "./Report";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const SampleReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Sample Report</h1>

			<SampleProvider>
				<Report />
			</SampleProvider>
		</div>
	);
};

export default SampleReport;
