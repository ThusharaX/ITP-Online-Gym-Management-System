import React from "react";

// Page components
import TrainerList from "./TrainerCard";
import AddTrainer from "./AddTrainer";
import { AuthenticationTitle } from "./Login";
import { Dashboard } from "./Dashboard";
import { UserInfoIcons } from "./TrainerC";
// SampleProvider
import { TrainerProvider } from "../../contexts/TrainerContext";

const Trainers = () => {
	return (
		<>
			<h1>DASHBOARD</h1>
			<Dashboard />

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

					<UserInfoIcons />
					<UserInfoIcons />
					<UserInfoIcons />

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

export default Trainers;
