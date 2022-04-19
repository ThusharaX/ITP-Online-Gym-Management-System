import React from "react";

// Page components
import TrainerList from "./TrainerList";
import AddTrainer from "./AddTrainer";
import { Login } from "./Login";
import { Dashboard as TrainerDashboard } from "./Dashboard";
// SampleProvider
import { TrainerProvider } from "../../contexts/TrainerContext";

const ListTrainers = () => {
	return (
		<TrainerProvider>
			<TrainerList />
		</TrainerProvider>
	);
};

const TrainerRegister = () => {
	return (
		<TrainerProvider>
			<AddTrainer />
		</TrainerProvider>
	);
};
const TrainerLogin = () => {
	return (
		<TrainerProvider>
			<Login />
		</TrainerProvider>
	);
};

export { TrainerDashboard, TrainerLogin, ListTrainers, TrainerRegister };
