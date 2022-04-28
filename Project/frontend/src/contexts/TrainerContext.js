import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Joi from "joi";
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/trainers`;
const TrainerContext = createContext();
import TrainerAPI from "./api/TrainerAPI";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

export function TrainerProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [trainers, setTrainers] = useState([]);

	const schema = Joi.object({
		firstName: Joi.string().min(5).max(20).message("First Name should be between 4 and 20 characters"),
		lastName: Joi.string().min(5).max(20).message("Last Name should be between 4 and 20 characters"),
		userName: Joi.string().min(5).max(20).message("User Name should be between 4 and 20 characters"),
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
	});

	let trainer = [
		{
			id: 1,
			pUrl: "https://images3.alphacoders.com/607/thumbbig-607635.webp",
			firstName: "Jane",
			lastName: "Fingerlicker",
			userName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "jfingerlickerk@gmail.com",
			address: "address1Malabbe",
			phoneNumber: "078545652675",
			Qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
		},
		{
			id: 2,
			pUrl: "https://images2.alphacoders.com/608/thumbbig-608713.webp",
			firstName: "Jill",
			lastName: "Jailbreaker",
			userName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "jjbreaker@gmail.com",
			address: "address1Malabbe",
			phoneNumber: "078545652675",
			Qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
		},
		{
			id: 3,
			pUrl: "https://images7.alphacoders.com/800/thumbbig-800681.webp",
			firstName: "Bill",
			lastName: "Headbanger",
			userName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "ddagjssdk@gmail.com",
			address: "address1Malabbe",
			phoneNumber: "078545652675",
			Qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
		},
	];

	// Get all trainers
	// useEffect(() => {
	// 	axios.get(baseURL).then((res) => {
	// 		setTrainers(res.data);
	// 		setLoading(false);
	// 	});
	// }, []);
	useEffect(() => {
		setTrainers(trainer);
		setIsLoading(false);
	}, []);

	// Form initial state
	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			firstName: "first name",
			lastName: "last name",
			userName: "last name",
			nic: "09612490852",
			email: "train@gmail.com",
			dob: new Date(),
			gender: "Female",
			address: "address1Malabbe",
			phoneNumber: "0123456789",
			qualifications: ["css", "javascript", "mongoose", "node"],
			psw: "psw112345",
			rep_psw: "psw112345",
		},
	});

	// Add new trainer
	const addTrainer = (values) => {
		setIsLoading(true);
		const newTrainer = {
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.userName,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			phoneNumber: values.phoneNumber,
			password: values.psw,
			qualifications: String(values.qualifications).split(","),
			permissionLevel: "TRAINER",
		};
		TrainerAPI.register(newTrainer).then((response) => {
			// eslint-disable-next-line no-console
			console.log(response);
			setIsLoading(false);
		});
	};

	const updateTrainer = (values) => {
		const newTrainer = {
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.userName,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			phoneNumber: values.phoneNumber,
			qualifications: String(values.qualifications).split(","),
		};
		// axios.post(baseURL, newTrainer).then((res) => {
		// 	setTrainers([...trainers, res.data]);
		// 	form.reset();
		// });
		setTrainers([...trainers, res.data]);
		// form.reset();
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
		<TrainerContext.Provider value={{ trainers, confirmDelete, addTrainer, updateTrainer, form, lform, login }}>
			{children}
		</TrainerContext.Provider>
	);
}

export default TrainerContext;
