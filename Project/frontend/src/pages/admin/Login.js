import React, { useContext } from "react";
import { TextInput, PasswordInput, Button, Group, Box } from "@mantine/core";

import UserContext from "../../contexts/UserContext";

const Login = () => {
	const { login, form, isLoggedIn, isLoading } = useContext(UserContext);

	return (
		<div>
			<h1>Admin Login Page</h1>

			{isLoggedIn ? (
				<p>You are logged in!</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				<Box sx={{ maxWidth: 300 }} mx="auto">
					{/* eslint-disable-next-line no-console */}
					<form onSubmit={form.onSubmit((values) => login(values))}>
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

export default Login;
