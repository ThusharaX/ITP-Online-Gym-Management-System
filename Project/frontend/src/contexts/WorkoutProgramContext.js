import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

const baseURL = `${process.env.REACT_APP_BACKEND_URL}/workoutProgram`;
const WorkoutProgramContext = createContext();

export function WorkoutProgramProvider({ children }) {
	const [workoutPrograms, setWorkoutPrograms] = useState([]);

	// Get all workoutPrograms
	useEffect(() => {
		axios.get(baseURL).then((res) => {
			setWorkoutPrograms(res.data);
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
		axios.post(baseURL, newWorkoutProgram).then((res) => {
			setWorkoutPrograms([...workoutPrograms, res.data]);
			form.reset();
		});
	};

	// Delete workoutProgram and update UI
	const deleteWorkoutProgram = (id) => {
		axios.delete(`${baseURL}/${id}`).then((res) => {
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

	return (
		<WorkoutProgramContext.Provider value={{ workoutPrograms, confirmDelete, addWorkoutProgram, form }}>
			{children}
		</WorkoutProgramContext.Provider>
	);
}

export default WorkoutProgramContext;
