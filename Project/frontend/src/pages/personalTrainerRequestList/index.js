import React from "react";

// Page Components
import PersonalTrainerRequestList from "./PersonalTrainerRequestList";

// PersonalTrainerRequest Provider
import { PersonalTrainerRequestProvider } from "../../contexts/PersonalTrainerRequestContext";

const RList = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Personal Trainer Requests</h1>

			<PersonalTrainerRequestProvider>
				<PersonalTrainerRequestList />
			</PersonalTrainerRequestProvider>
		</div>
	);
};

export default RList;
