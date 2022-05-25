import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import WorkoutScRAPI from "./api/WorkoutScRAPI";

const WorkoutScRContext = createContext();

export function WorkoutScRProvider({ children }) {
	const [WorkoutScR, setWorkoutScR] = useState([]);

	// Get all workout schedule requests
	useEffect(() => {
		WorkoutScRAPI.getWorkoutScRData().then((response) => {
			setWorkoutScR(response.data);
		});
	}, []);

	const form = useForm({
		initialValues: {
			name: "",
			age: 18,
			gender: "",
			email: "",
			requirement: "",
		},
	});

	// Add new workout schedule request
	const addWorkoutScR = (values) => {
		const newWorkoutScR = {
			name: values.name,
			age: values.age,
			gender: values.gender,
			email: values.email,
			requirement: values.requirement,
		};

		WorkoutScRAPI.addWorkoutScR(newWorkoutScR).then((response) => {
			setWorkoutScR([...WorkoutScR, response.data]);
			form.reset();
		});
	};

	// Get One Workout Schedule Request
	const getOneWorkoutData = () => {
		WorkoutScRAPI.getOneWorkoutData(localStorage.getItem("uID")).then(() => {
			setWorkoutScR(WorkoutScR.filter((getOneworkout) => getOneworkout._id !== id));
		});
	};

	// Delete Workout Schedule Request
	const deleteWorkoutScR = (id) => {
		WorkoutScRAPI.deleteWorkoutScR(id).then(() => {
			setWorkoutScR(WorkoutScR.filter((workoutScR) => workoutScR._id !== id));
		});
	};

	//  Confirm Delete Workout Schedule Requests
	const modals = useModals();
	const confirmDelete = (id) => {
		modals.openConfirmModal({
			title: "Delete Workout Schedule Request",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this Workout Schedule Request? This action is destructive and cannot be
					undone.
				</Text>
			),
			labels: {
				confirm: "Delete Workout Schedule Request",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteWorkoutScR(id),
		});
	};

	//Edit Workout

	const editWorkoutScR = (values) => {
		const newWorkoutScR = {
			name: values.name,
			age: values.age,
			gender: values.gender,
			email: values.email,
			requirement: values.requirement,
		};

		WorkoutScRAPI.editWorkoutScR(values.id, newWorkoutScR).then((response) => {
			setWorkoutScR(WorkoutScR.map((WorkoutScR) => (WorkoutScR._id === values.id ? response.data : WorkoutScR)));
			form.reset();
		});
	};

	const [editOpened, setEditOpened] = useState(false);

	return (
		<WorkoutScRContext.Provider
			value={{
				WorkoutScR,
				addWorkoutScR,
				form,
				setWorkoutScR,
				confirmDelete,
				getOneWorkoutData,
				editWorkoutScR,
				editOpened,
				setEditOpened,
			}}
		>
			{children}
		</WorkoutScRContext.Provider>
	);
}

export default WorkoutScRContext;
