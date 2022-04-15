import React from "react";

// Page components
import TrainerList from "./TrainerList";
import AddTrainer from "./AddTrainer";

// TrainerProvider
import { TrainerProvider } from "../../contexts/TrainerContext";

const Trainer = () => {
	return (
		<div>
			<h1>Workout Program Page</h1>

			<TrainerProvider>
				<style jsx>{`
					.components {
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						margin: 0 auto;
					}
				`}</style>

				<div className="components">
					{/* Trainer list */}
					<TrainerList />

					{/* Add new Trainer */}
					<AddTrainer />
				</div>
			</TrainerProvider>
		</div>
	);
};

export default Trainer;
