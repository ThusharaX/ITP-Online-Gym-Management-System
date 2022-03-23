import React from "react";

// Page components
import SampleList from "./SampleList";
import AddSample from "./AddSample";

// SampleProvider
import { SampleProvider } from '../../contexts/SampleContext';

const Sample = () => {

	return (
		<div>
			<h1>Sample Page</h1>

			<SampleProvider>

				{/* Sample list */}
				<SampleList />
				
				{/* Add new Sample */}
				<AddSample />

			</SampleProvider>
		</div>
	)
}

export default Sample