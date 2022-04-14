import React, { useState, useEffect } from "react";
import { TextInput, PasswordInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

const UserLogin = () => {
	const [authToken, setAuthToken] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm({
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			password: (value) => (value.length >= 4 ? null : "Password must be at least 8 characters"),
		},
	});

	const onSubmit = (values) => {
		setIsLoading(true);
		axios
			.post("http://localhost:5000/user/login/", values)
			.then((res) => {
				localStorage.setItem("authToken", res.data.token);
				setAuthToken(localStorage.getItem("authToken"));
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

	return (
		<div>
			<h1>Admin Login Page</h1>

			<p>AuthToken: {authToken}</p>

			{isLoggedIn ? (
				<p>You are logged in!</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				<Box sx={{ maxWidth: 300 }} mx="auto">
					{/* eslint-disable-next-line no-console */}
					<form onSubmit={form.onSubmit((values) => onSubmit(values))}>
						<TextInput required label="Username" placeholder="Your Username" {...form.getInputProps("username")} />
						<PasswordInput required label="Password" placeholder="Password" {...form.getInputProps("password")} />

						<Group position="right" mt="md">
							<Button type="submit">Submit</Button>
						</Group>
					</form>
				</Box>
			)}
		</div>
	);
};

export default UserLogin;
