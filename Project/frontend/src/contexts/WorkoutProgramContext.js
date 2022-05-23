import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

import WorkoutProgramAPI from "./api/WorkoutProgramAPI";

import Joi from "joi";

const WorkoutProgramContext = createContext();

export function WorkoutProgramProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	// Form Validation
	const schema = Joi.object({
		photoURL: Joi.string().uri().allow(""),
		name: Joi.string().min(5).max(20).message("Name should be between 4 and 20 characters"),
		description: Joi.string().min(15).max(500).message("Description should be between 15 and 500 characters"),
		conducted_by: Joi.string().required(),
		fee: Joi.number().min(0).max(10000).message("Fee should be between 0 and 10000"),
		day: Joi.string()
			.valid(...days)
			.required(),
		time: Joi.string().required(),
	});

	// Enroll Workout Program
	const [enrolledWorkoutPrograms, setEnrolledWorkoutPrograms] = useState([]);

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
		WorkoutProgramAPI.getEnrolledWorkoutPrograms(localStorage.getItem("uID")).then((response) => {
			setEnrolledWorkoutPrograms(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			photoURL: "",
			name: "",
			description: "",
			conducted_by: "",
			fee: "",
			day: "",
			time: "",
		},
	});

	const fillWithDummyData = () => {
		form.setValues({
			photoURL:
				"https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			name: "Zumba",
			description: "Zumba is a fitness program that involves cardio and Latin-inspired dance.",
			conducted_by: "Mr. Perera (Zumba Instructor)",
			fee: 2500,
			day: "Monday",
			time: "10:00 AM - 11:00 AM",
		});
	};

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

	// Enroll Button State
	const [enrollButtonDisabled, setEnrollButtonDisabled] = useState(false);

	// Enroll workoutProgram
	const enrollWorkoutProgram = (workoutProgramID) => {
		if (!localStorage.getItem("permissionLevel")) {
			window.location.href = "/login";
		}

		const data = {
			userId: localStorage.getItem("uID"),
			workoutProgramId: workoutProgramID,
		};

		WorkoutProgramAPI.enrollWorkoutProgram(data).then((response) => {
			setEnrolledWorkoutPrograms(enrolledWorkoutPrograms.concat(response.data));
			setEnrollButtonDisabled(false);
		});
	};

	// Unenroll workoutProgram
	const unenrollWorkoutProgram = (workoutProgramID) => {
		const data = {
			userId: localStorage.getItem("uID"),
			workoutProgramId: workoutProgramID,
		};

		WorkoutProgramAPI.unenrollWorkoutProgram(data).then((response) => {
			// Remove workoutProgram from enrolledWorkoutPrograms
			setEnrolledWorkoutPrograms(enrolledWorkoutPrograms.filter((workoutProgram) => workoutProgram !== response.data));
			setEnrollButtonDisabled(false);
		});
	};

	const [allWorkoutProgramsWithTotalRevenue, setAllWorkoutProgramsWithTotalRevenue] = useState([]);

	const getAllWorkoutProgramsWithTotalRevenue = () => {
		setIsLoading(true);
		WorkoutProgramAPI.getAllWorkoutProgramsWithTotalRevenue().then((response) => {
			setAllWorkoutProgramsWithTotalRevenue(response.data);
			setIsLoading(false);
		});
	};

	// Calculate total revenue
	let finalTotalRevenue = 0;
	allWorkoutProgramsWithTotalRevenue.forEach((workoutProgram) => {
		finalTotalRevenue += workoutProgram.totalRevenue;
	});

	// Get all totalRevenues new array
	let totalRevenueData = [];
	allWorkoutProgramsWithTotalRevenue.forEach((workoutProgram) => {
		totalRevenueData.push(workoutProgram.totalRevenue);
	});

	// Get all workoutProgram names new array
	let totalRevenueLabelsData = [];
	allWorkoutProgramsWithTotalRevenue.forEach((workoutProgram) => {
		totalRevenueLabelsData.push(workoutProgram.name);
	});

	return (
		<WorkoutProgramContext.Provider
			value={{
				days,
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
				enrollWorkoutProgram,
				unenrollWorkoutProgram,
				enrolledWorkoutPrograms,
				enrollButtonDisabled,
				setEnrollButtonDisabled,
				schema,
				fillWithDummyData,
				isLoading,
				getAllWorkoutProgramsWithTotalRevenue,
				allWorkoutProgramsWithTotalRevenue,
				finalTotalRevenue,
				totalRevenueData,
				totalRevenueLabelsData,
			}}
		>
			{children}
		</WorkoutProgramContext.Provider>
	);
}

export default WorkoutProgramContext;
