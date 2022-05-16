import { createContext, useState } from "react";

import { useForm } from "@mantine/form";

const EmployeeContext = createContext();
import UserAPi from "./api/UserAPI";

export function EmployeeProvider({ children }) {
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
				if (response.data.permissionLevel !== "EMPLOYEE") {
					setIsLoading(false);
					return alert("You are not a Employee");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.username);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					window.location.href = "/employee";
					setIsLoggedIn(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setIsLoading(false);
			});
	};

	return (
		<EmployeeContext.Provider
			value={{ login, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, form, message, setMessage }}
		>
			{children}
		</EmployeeContext.Provider>
	);
}

export default EmployeeContext;
