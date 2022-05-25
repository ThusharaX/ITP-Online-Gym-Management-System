import React from "react";

import Report from "./Report";

// Member Provider
import { MemberProvider } from "../../contexts/MemberContext";

const MemberReport = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Member Report</h1>

			<MemberProvider>
				<Report />
			</MemberProvider>
		</div>
	);
};

export default MemberReport;
