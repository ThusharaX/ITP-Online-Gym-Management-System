import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Joi from "joi";
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/trainer`;
const TrainerContext = createContext();
import TrainerAPI from "./api/TrainerAPI";
import addTrainer from "../pages/trainer/AddTrainer";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

export function TrainerProvider({ children }) {
	const [date, setDate] = useState("1990-05-02T00:00:00");
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");
	const [userNameError, setUserNameError] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [trainers, setTrainers] = useState([]);
	const init = {
		avatar: "null",
		firstName: "first name",
		lastName: "last name",
		username: "user_name",
		nic: "09612490852",
		email: "email@gmail.com",
		address: "address",
		dob: new Date("1990-05-02T00:00:00"),
		gender: "Female",
		phoneNumber: "0123456789",
		qualifications: ["css", "javascript", "mongoose", "node"],
	};
	const [trainer, setTrainer] = useState(init);

	const schema = Joi.object({
		firstName: Joi.string().min(5).max(20).message("First Name should be between 4 and 20 characters"),
		lastName: Joi.string().min(5).max(20).message("Last Name should be between 4 and 20 characters"),
		username: Joi.string().min(5).max(20).message("User Name should be between 4 and 20 characters"),
		nic: Joi.string().min(10).max(12).message("NIC should be Valid"),
		email: Joi.string(),
		dob: Joi.date().max("now"),
		gender: Joi.string().required(),
		address: Joi.string().min(5).max(100).message("Address should be valid"),
		phoneNumber: Joi.string().min(10).max(10).message("Phone Number should valid"),
		qualifications: Joi.required(),
		psw: Joi.string()
			.strip()
			.min(6)
			.pattern(new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$"))
			.strip()
			.message("Password should be valid"),
		rep_psw: Joi.ref("psw"),
		avatar: Joi.string().required(),
	});

	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			avatar: "null",
			firstName: "first name",
			lastName: "last name",
			username: "last name",
			nic: "09612490852",
			email: "train@gmail.com",
			dob: new Date("1990-05-02T00:00:00"),
			gender: "Female",
			address: "address1Malabbe",
			phoneNumber: "0123456789",
			qualifications: ["css", "javascript", "mongoose", "node"],
			psw: "psw112345",
			rep_psw: "psw112345",
		},
	});

	const schemaProfile = Joi.object({
		firstName: Joi.string().min(5).max(20).message("First Name should be between 4 and 20 characters"),
		lastName: Joi.string().min(5).max(20).message("Last Name should be between 4 and 20 characters"),
		username: Joi.string().min(5).max(20).message("User Name should be between 4 and 20 characters"),
		nic: Joi.string().min(10).max(12).message("NIC should be Valid"),
		email: Joi.string(),
		dob: Joi.date().max("now"),
		gender: Joi.any().allow("Male", "Female"),
		address: Joi.string().min(5).max(100).message("Address should be valid"),
		phoneNumber: Joi.string().min(10).max(10).message("Phone Number should valid"),
		qualifications: Joi.required(),
		avatar: Joi.string().required(),
	});

	const formProfile = useForm({
		schema: joiResolver(schemaProfile),
		initialValues: {
			avatar: "null",
			firstName: "first name",
			lastName: "last name",
			username: "last name",
			nic: "09612490852",
			email: "train@gmail.com",
			dob: new Date("1990-05-02T00:00:00"),
			gender: "Female",
			address: "address1Malabbe",
			phoneNumber: "0123456789",
			qualifications: ["css", "javascript", "mongoose", "node"],
		},
	});

	useEffect(() => {
		TrainerAPI.getTrainers().then((res) => {
			setTrainers(res.data);
		});
	}, []);

	const getTrainer = (id) => {
		TrainerAPI.getTrainerData(id).then((res) => {
			setTrainer(res.data);
		});
	};

	// Add new trainer
	const addTrainer = (values) => {
		setIsLoading(true);
		const newTrainer = {
			avatar: values.avatar,
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.username,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			phoneNumber: values.phoneNumber,
			password: values.psw,
			qualifications: String(values.qualifications).split(","),
		};
		TrainerAPI.register(newTrainer)
			.then((response) => {
				// setIsLoading(false);
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
				}
				if (err.response.data.details == "NIC already exists") {
					setNicError(err.response.data.details);
				}
				if (err.response.data.details == "Username already exists") {
					setUserNameError(err.response.data.details);
				}
			});
	};

	const updateTrainer = (values) => {
		const newTrainer = {
			avatar: values.avatar,
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.username,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			phoneNumber: values.phoneNumber,
			qualifications: String(values.qualifications).split(","),
		};
		TrainerAPI.updateTrainer(localStorage.getItem("uID"), newTrainer).then((res) => {
			setTrainer(newTrainer);
		});
		//setIsLoading(false);
	};

	// Delete trainer and update UI
	const deleteTrainer = (id) => {
		axios.delete(`${baseURL}/${id}`).then((res) => {
			setTrainers(trainers.filter((trainer) => trainer._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Trainer",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this trainer? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete trainer", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			onCancel: () => {
				let x = 5;
			},
			// onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteTrainer(id),
		});

	const lform = useForm({
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			password: (value) => (value.length >= 4 ? null : "Password must be at least 4 characters"),
		},
	});
	const login = (values) => {
		setIsLoading(true);
		TrainerAPI.login(values)
			.then((response) => {
				if (response.data.permissionLevel !== "TRAINER") {
					setIsLoading(false);
					return alert("You are not a trainer");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.username);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					window.location.href = "/trainers";
					setIsLoggedIn(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
				return alert(err.response.data.details.message);
			});
	};

	return (
		<TrainerContext.Provider
			value={{
				userNameError,
				setUserNameError,
				nicError,
				setNicError,
				mailError,
				setMailError,
				TrainerAPI,
				date,
				setDate,
				getTrainer,
				trainers,
				confirmDelete,
				addTrainer,
				updateTrainer,
				form,
				formProfile,
				login,
				trainer,
				setTrainer,
			}}
		>
			{children}
		</TrainerContext.Provider>
	);
}

export default TrainerContext;
