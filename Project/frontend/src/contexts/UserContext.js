import { createContext, useState, useEffect } from "react";
import { useForm } from "@mantine/form";

import UserAPi from "./api/UserAPI";

const UserContext = createContext();

export function UserProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

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

	return (
		<UserContext.Provider value={{ login, logout, form, isLoggedIn, isLoading, message }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
