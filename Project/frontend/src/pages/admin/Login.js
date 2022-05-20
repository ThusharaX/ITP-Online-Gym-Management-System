import React, { useContext } from "react";
import { TextInput, PasswordInput, Button, Group, Box, Notification, Loader } from "@mantine/core";
import { X } from "tabler-icons-react";

import UserContext from "../../contexts/UserContext";

const Login = () => {
	const { login, form, isLoggedIn, isLoading, message } = useContext(UserContext);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Admin Login Page</h1>

			{/* Align loader center */}
			{isLoading && <Loader style={{ flex: 1, justifyContent: "center" }} />}

			{/* if response has message, display it */}
			{message && (
				<Notification
					style={{ maxWidth: "400px", margin: "0 auto", marginBottom: "20px" }}
					icon={<X size={18} />}
					color="red"
					closeButtonProps
				>
					{message}
				</Notification>
			)}

			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => login(values))}>
					<TextInput required label="Username" placeholder="Your Username" {...form.getInputProps("username")} />
					<PasswordInput required label="Password" placeholder="Password" {...form.getInputProps("password")} />

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</div>
	);
};

export default Login;
