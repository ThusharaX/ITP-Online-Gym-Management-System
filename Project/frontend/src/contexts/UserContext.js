import { createContext, useState, useEffect } from "react";
import { useForm, joiResolver } from "@mantine/form";

import UserAPi from "./api/UserAPI";

import Joi from "joi";

const UserContext = createContext();

export function UserProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const [user, setUser] = useState({
		uID: "",
		avatar: "",
		firstName: "",
		lastName: "",
		nic: "",
		phoneNumber: "",
		email: "",
		username: "",
		enrolledWorkoutPrograms: [],
		permissionLevel: "",
		createdAt: "",
		updatedAt: "",
		qualifications: [],
	});

	const form = useForm({
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			password: (value) => (value.length >= 4 ? null : "Password must be at least 4 characters"),
		},
	});

	// Form Validation
	const SignUpFormSchema = Joi.object({
		firstName: Joi.string().min(2).max(20).message("First name should be between 2 and 20 characters"),
		lastName: Joi.string().min(2).max(20).message("Last name should be between 2 and 20 characters"),
		nic: Joi.string().min(10).max(10).message("NIC should be 10 characters"),
		phoneNumber: Joi.string().min(10).max(10).message("Phone number should be 10 characters"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.message("Email should be valid"),
		username: Joi.string().min(5).max(20).message("Username should be between 5 and 20 characters"),
		password: Joi.string().min(6).message("Password should be valid"),
		confirmPassword: Joi.ref("password"),
		permissionLevel: Joi.string().valid("MEMBER", "EMPLOYEE"),
	});

	const SignUpForm = useForm({
		schema: joiResolver(SignUpFormSchema),
		initialValues: {
			firstName: "",
			lastName: "",
			nic: "",
			phoneNumber: "",
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
			permissionLevel: "",
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
				window.location.href = `/${response.data.permissionLevel.toLowerCase()}`;
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("uID");
		localStorage.removeItem("username");
		localStorage.removeItem("permissionLevel");
		window.location.href = "/";
	};

	const signUp = (values) => {
		setIsLoading(true);
		UserAPi.register(values)
			.then((response) => {
				localStorage.setItem("uID", response.data._id);
				localStorage.setItem("username", response.data.username);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				window.location.href = `/${response.data.permissionLevel.toLowerCase()}`;
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	// Get user details
	// const getUserDetails = (uid) => {
	// 	setIsLoading(true);
	// 	UserAPi.getUserDetails(uid).then((response) => {
	// 		setUser(response.data);
	// 		// eslint-disable-next-line no-console
	// 		console.log(response.data);
	// 		setIsLoading(false);
	// 	});
	// };

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			UserAPi.getUserDetails(localStorage.getItem("uID")).then((response) => {
				setUser(response.data);
			});
		}
	}, []);

	return (
		<UserContext.Provider value={{ login, logout, form, isLoggedIn, isLoading, message, signUp, SignUpForm, user }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
