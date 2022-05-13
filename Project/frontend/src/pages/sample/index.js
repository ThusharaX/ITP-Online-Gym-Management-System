import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

// Page components
import SampleList from "./SampleList";
import AddSample from "./AddSample";

// SampleProvider
import { SampleProvider } from "../../contexts/SampleContext";

const Sample = () => {
	return (
		<div>
			<h1>Sample Page</h1>

			<Button>
				<Link style={{ textDecoration: "none", color: "#fff" }} to="/sample-report">
					Sample Report
				</Link>
			</Button>

			<SampleProvider>
				{/* Sample list */}
				<SampleList />

				{/* Add new Sample */}
				<AddSample />
			</SampleProvider>
		</div>
	);
};

export default Sample;
