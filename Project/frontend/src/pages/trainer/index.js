import React from "react";

// Page components
import TrainerList from "./TrainerList";
import AddTrainer from "./AddTrainer";
import { AuthenticationTitle } from "./Login";
import { Dashboard as TrainerDashboard } from "./Dashboard";
// SampleProvider
import { TrainerProvider } from "../../contexts/TrainerContext";

const Test = () => {
	return (
		<>
			<div
				style={{
					display: "table",
					borderCollapse: "separate",
					borderSpacing: "50px",
				}}
			>
				<TrainerProvider>
					<TrainerList />
				</TrainerProvider>
			</div>
		</>
	);
};

const Trainer = () => {
	return (
		<>
			<div
				style={{
					display: "table",
					borderCollapse: "separate",
					borderSpacing: "50px",
				}}
			>
				<TrainerProvider>
					{/* Trainer list */}
					<h1>TRAINER LIST</h1>
					<TrainerList />

					<br />
					{/* Add new Trainer */}
					<h1>TRAINER REGISTRATION</h1>
					<AddTrainer />
					<h1>TRAINER LOGIN</h1>
					<AuthenticationTitle />
					<h1>TRAINER PROFILE</h1>
				</TrainerProvider>
			</div>
		</>
	);
};

export { Trainer, TrainerDashboard, TrainerList, AddTrainer, Test };
