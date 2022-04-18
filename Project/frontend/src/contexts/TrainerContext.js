import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/trainers`;
const TrainerContext = createContext();
import UserAPi from "./api/UserAPI";

export function TrainerProvider({ children }) {
	const [trainers, setTrainers] = useState([]);
	const [isLoading, setLoading] = useState(false);

	if (isLoading) {
		return (
			<div>
				<Text size="sm">Loading...</Text>
			</div>
		);
	}

	let trainer = [
		{
			id: 1,
			pUrl: "https://images3.alphacoders.com/607/thumbbig-607635.webp",
			fName: "Jane",
			lName: "Fingerlicker",
			uName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "jfingerlickerk@gmail.com",
			address: "address1Malabbe",
			pNumber: "078545652675",
			Qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
		},
		{
			id: 2,
			pUrl: "https://images2.alphacoders.com/608/thumbbig-608713.webp",
			fName: "Jill",
			lName: "Jailbreaker",
			uName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "jjbreaker@gmail.com",
			address: "address1Malabbe",
			pNumber: "078545652675",
			Qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
		},
		{
			id: 3,
			pUrl: "https://images7.alphacoders.com/800/thumbbig-800681.webp",
			fName: "Bill",
			lName: "Headbanger",
			uName: "kiiii",
			nic: "89612490852",
			dob: "2012-04-23",
			gender: "Male",
			email: "ddagjssdk@gmail.com",
			address: "address1Malabbe",
			pNumber: "078545652675",
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
		setLoading(false);
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			fName: "first name",
			lName: "last name",
			uName: "last name",
			nic: "09612490852",
			dob: "2012-04-23",
			gender: "male",
			address: "address1Malabbe",
			pNumber: "0123456789",
			qualifications: ["css", "javascript", "mongoose", "node"],
			password: "psw112345",
			trainer: "6238afed94d1c551735ca084",
		},
	});

	// Add new trainer
	const addTrainer = (values) => {
		const newTrainer = {
			fName: values.fName,
			lName: values.lName,
			uName: values.uName,
			nic: values.nic,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			pNumber: values.pNumber,
			password: values.password,
			qualifications: values.qualifications.split(","),
			trainer: values.trainer,
		};
		axios.post(baseURL, newTrainer).then((res) => {
			setTrainers([...trainers, res.data]);
			form.reset();
		});
	};
	const updateTrainer = (values) => {
		const newTrainer = {
			fName: values.fName,
			lName: values.lName,
			uName: values.uName,
			nic: values.nic,
			dob: values.dob,
			gender: values.gender,
			address: values.address,
			pNumber: values.pNumber,
			password: values.password,
			qualifications: values.qualifications.split(","),
			trainer: values.trainer,
		};
		// axios.post(baseURL, newTrainer).then((res) => {
		// 	setTrainers([...trainers, res.data]);
		// 	form.reset();
		// });
		setTrainers([...trainers, res.data]);
		form.reset();
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

	return (
		<TrainerContext.Provider value={{ trainers, confirmDelete, addTrainer, updateTrainer, form }}>
			{children}
		</TrainerContext.Provider>
	);
}

export const UserContext = createContext();
export function UserProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm({
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
		UserAPi.login(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("username", response.data.username);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				window.location.href = "/dashboard";
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
				setIsLoading(false);
			});
	};

	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("username");
		localStorage.removeItem("permissionLevel");
		window.location.href = "/userLogin";
	};

	return <UserContext.Provider value={{ login, logout, form, isLoggedIn, isLoading }}>{children}</UserContext.Provider>;
}

export default TrainerContext;
