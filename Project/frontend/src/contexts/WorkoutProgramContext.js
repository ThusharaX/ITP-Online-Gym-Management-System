import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import WorkoutProgramAPI from "./api/WorkoutProgramAPI";

const WorkoutProgramContext = createContext();

export function WorkoutProgramProvider({ children }) {
	// Workout Programs
	const [workoutPrograms, setWorkoutPrograms] = useState([]);

	// Workout Program
	const [workoutProgram, setWorkoutProgram] = useState({
		photoURL: "",
		name: "",
		description: "",
		conducted_by: "",
		fee: "",
		day: "",
		time: "",
	});

	// Get all workoutPrograms
	useEffect(() => {
		WorkoutProgramAPI.getWorkoutProgramData().then((response) => {
			setWorkoutPrograms(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			photoURL:
				"https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			name: "Zumba",
			description: "Zumba is a fitness program that involves cardio and Latin-inspired dance.",
			conducted_by: "Mr. Perera (Zumba Instructor)",
			fee: "Rs. 2500",
			day: "Monday",
			time: "10:00 AM - 11:00 AM",
		},
	});

	// Add new workoutProgram
	const addWorkoutProgram = (values) => {
		const newWorkoutProgram = {
			photoURL: values.photoURL,
			name: values.name,
			description: values.description,
			conducted_by: values.conducted_by,
			fee: values.fee,
			day: values.day,
			time: values.time,
		};
		WorkoutProgramAPI.addWorkoutProgram(newWorkoutProgram).then((response) => {
			setWorkoutPrograms([...workoutPrograms, response.data]);
			form.reset();
		});
	};

	// AddWorkout Modal
	const [opened, setOpened] = useState(false);

	// Delete workoutProgram and update UI
	const deleteWorkoutProgram = (id) => {
		WorkoutProgramAPI.deleteWorkoutProgram(id).then(() => {
			setWorkoutPrograms(workoutPrograms.filter((workoutProgram) => workoutProgram._id !== id));
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
					Are you sure you want to delete this workoutProgram? This action is destructive and cannot be undone.
				</Text>
			),
			labels: {
				confirm: "Delete workout Program",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteWorkoutProgram(id),
		});

	// Edit workoutProgram
	const editWorkoutProgram = (values) => {
		const newWorkoutProgram = {
			photoURL: values.photoURL,
			name: values.name,
			description: values.description,
			conducted_by: values.conducted_by,
			fee: values.fee,
			day: values.day,
			time: values.time,
		};
		WorkoutProgramAPI.editWorkoutProgram(values.id, newWorkoutProgram).then((response) => {
			setWorkoutPrograms(
				workoutPrograms.map((workoutProgram) => (workoutProgram._id === values.id ? response.data : workoutProgram))
			);
			form.reset();
		});
	};

	// editWorkoutProgram Modal
	const [editOpened, setEditOpened] = useState(false);

	return (
		<WorkoutProgramContext.Provider
			value={{
				workoutPrograms,
				setWorkoutPrograms,
				confirmDelete,
				form,
				addWorkoutProgram,
				opened,
				setOpened,
				editWorkoutProgram,
				editOpened,
				setEditOpened,
				workoutProgram,
				setWorkoutProgram,
			}}
		>
			{children}
		</WorkoutProgramContext.Provider>
	);
}

export default WorkoutProgramContext;
