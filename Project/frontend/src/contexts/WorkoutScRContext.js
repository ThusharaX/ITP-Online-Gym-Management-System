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

	return (
		<WorkoutScRContext.Provider
			value={{
				WorkoutScR,
				addWorkoutScR,
				form,
				setWorkoutScR,
			}}
		>
			{children}
		</WorkoutScRContext.Provider>
	);
}

export default WorkoutScRContext;
