import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import TrainerAPI from "./api/TrainerAPI";

const TrainerContext = createContext();

export function TrainerProvider({ children }) {
	const [trainers, setTrainers] = useState([]);

	// Get all trainers
	useEffect(() => {
		TrainerAPI.getTrainerData().then((response) => {
			setTrainers(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			photoURL: "https://fakeimg.pl/350x200/?text=Zumba&font=Ubuntu",
			name: "Zumba2",
			description: "Zumba2 is a fitness program that involves cardio and Latin-inspired dance.",
			conducted_by: "Mr. Perera (Zumba Instructor)",
			fee: "Rs. 2500",
			day: "Monday",
			time: "10:00 AM - 11:00 AM",
		},
	});

	// Add new trainer
	const addTrainer = (values) => {
		const newTrainer = {
			photoURL: values.photoURL,
			name: values.name,
			description: values.description,
			conducted_by: values.conducted_by,
			fee: values.fee,
			day: values.day,
			time: values.time,
		};
		TrainerAPI.addTrainer(newTrainer).then((response) => {
			setTrainers([...trainers, response.data]);
			form.reset();
		});
	};

	// Delete trainer and update UI
	const deleteTrainer = (id) => {
		TrainerAPI.deleteTrainer(id).then(() => {
			setTrainers(trainers.filter((trainer) => trainer._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Workout Program",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this trainer? This action is destructive and cannot be undone.
				</Text>
			),
			labels: {
				confirm: "Delete workout Program",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteTrainer(id),
		});

	return (
		<TrainerContext.Provider value={{ trainers, confirmDelete, addTrainer, form }}>{children}</TrainerContext.Provider>
	);
}

export default TrainerContext;
