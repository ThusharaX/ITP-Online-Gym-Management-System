import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

import WorkoutAPI from "./api/WorkoutAPI";

import Joi from "joi";

const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
	// Form Validation
	const schema = Joi.object({
		workout_name: Joi.string().min(5).max(50).message("Workout Name should be between 4 and 50 characters"),
		workout_category: Joi.string().min(5).max(30).message("Workout Category should be between 4 and 30 characters"),
		muscle_group: Joi.string().min(5).max(30).message("Muscle Group should be between 4 and 30 characters"),
		starting_position_img: Joi.string().uri().allow(""),
		mid_position_img: Joi.string().uri().allow(""),
		instructions: Joi.string().min(5).max(500).message("Description should be between 5 and 500 characters"),
		action: Joi.string().min(5).max(500).message("Action should be between 5 and 500 characters"),
		tips: Joi.string().min(5).max(500).message("Tips should be between 5 and 500 characters"),
	});

	// Workouts
	const [workouts, setWorkouts] = useState([]);

	const [workout, setWorkout] = useState({
		workout_name: "",
		workout_category: "",
		muscle_group: "",
		starting_position_img: "",
		mid_position_img: "",
		instructions: "",
		action: "",
		tips: "",
	});

	// Get all workouts
	useEffect(() => {
		WorkoutAPI.getWorkoutData().then((response) => {
			setWorkouts(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			workout_name: "Workout Name",
			workout_category: "Workout Category",
			muscle_group: "Muscle Group",
			starting_position_img:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			mid_position_img:
				"https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			instructions: "Instructions",
			action: "Action",
			tips: "Tips",
		},
	});

	// Add new workout
	const addWorkout = (values) => {
		const newWorkout = {
			workout_name: values.workout_name,
			workout_category: values.workout_category,
			muscle_group: values.muscle_group,
			starting_position_img: values.starting_position_img,
			mid_position_img: values.mid_position_img,
			instructions: values.instructions,
			action: values.action,
			tips: values.tips,
		};
		WorkoutAPI.addWorkout(newWorkout).then((response) => {
			setWorkouts([...workouts, response.data]);
			form.reset();
		});
	};

	// AddWorkout Modal
	const [opened, setOpened] = useState(false);

	// Delete workout and update UI
	const deleteWorkout = (id) => {
		WorkoutAPI.deleteWorkout(id).then(() => {
			setWorkouts(workouts.filter((workout) => workout._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Workout",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this workout? This action is destructive and cannot be undone.
				</Text>
			),
			labels: {
				confirm: "Delete workout",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteWorkout(id),
		});

	// Edit workout
	const editWorkout = (values) => {
		const newWorkout = {
			workout_name: values.workout_name,
			workout_category: values.workout_category,
			muscle_group: values.muscle_group,
			starting_position_img: values.starting_position_img,
			mid_position_img: values.mid_position_img,
			instructions: values.instructions,
			action: values.action,
			tips: values.tips,
		};
		WorkoutAPI.editWorkout(values.id, newWorkout).then((response) => {
			setWorkouts(workouts.map((workout) => (workout._id === values.id ? response.data : workout)));
			form.reset();
		});
	};

	// editWorkout Modal
	const [editOpened, setEditOpened] = useState(false);

	// View Count increment
	const incrementViewCount = (id) => {
		WorkoutAPI.incrementViewCount(id).then((response) => {
			setWorkouts(workouts.map((workout) => (workout._id === id ? response.data : workout)));
		});
	};

	return (
		<WorkoutContext.Provider
			value={{
				workouts,
				setWorkouts,
				confirmDelete,
				form,
				addWorkout,
				opened,
				setOpened,
				editWorkout,
				editOpened,
				setEditOpened,
				workout,
				setWorkout,
				incrementViewCount,
			}}
		>
			{children}
		</WorkoutContext.Provider>
	);
}

export default WorkoutContext;
