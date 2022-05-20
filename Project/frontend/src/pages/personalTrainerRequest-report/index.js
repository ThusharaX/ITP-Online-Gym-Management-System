import React from "react";

import PackageReport from "./PackageReport";

// SampleProvider
import { PersonalTrainerRequestProvider } from "../../contexts/PersonalTrainerRequestContext";

const PReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Personal Trainer Request Report</h1>

			<PersonalTrainerRequestProvider>
				<PackageReport />
			</PersonalTrainerRequestProvider>
		</div>
	);
};

export default PReport;
