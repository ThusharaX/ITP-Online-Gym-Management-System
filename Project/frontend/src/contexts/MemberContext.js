import { createContext, useState } from "react";

import { useForm } from "@mantine/form";

const MemberContext = createContext();
import UserAPi from "./api/UserAPI";

export function MemberProvider({ children }) {
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
				if (response.data.permissionLevel !== "MEMBER") {
					setIsLoading(false);
					return alert("You are not a Member");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.username);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					window.location.href = "/member";
					setIsLoggedIn(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	return (
		<MemberContext.Provider
			value={{ login, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, form, message, setMessage }}
		>
			{children}
		</MemberContext.Provider>
	);
}

export default MemberContext;
