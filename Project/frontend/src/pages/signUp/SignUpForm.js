import React, { useContext } from "react";
import {
	TextInput,
	PasswordInput,
	NumberInput,
	Button,
	Group,
	Box,
	Notification,
	Loader,
	Autocomplete,
} from "@mantine/core";
import { X } from "tabler-icons-react";

import UserContext from "../../contexts/UserContext";

const SignUpForm = () => {
	const { signUp, SignUpForm, isLoggedIn, isLoading, message } = useContext(UserContext);

	const types = ["MEMBER", "EMPLOYEE"];

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Sign Up Page</h1>

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
				<form onSubmit={SignUpForm.onSubmit((values) => signUp(values))}>
					<TextInput
						required
						label="First Name"
						placeholder="Your First Name"
						{...SignUpForm.getInputProps("firstName")}
					/>
					<TextInput
						required
						label="Last Name"
						placeholder="Your Last Name"
						{...SignUpForm.getInputProps("lastName")}
					/>
					<TextInput required label="NIC" placeholder="Your NIC" {...SignUpForm.getInputProps("nic")} />
					<TextInput
						required
						label="Phone Number"
						placeholder="Your Phone Number"
						{...SignUpForm.getInputProps("phoneNumber")}
					/>
					<TextInput required label="Email" placeholder="Your Email" {...SignUpForm.getInputProps("email")} />
					<TextInput required label="Username" placeholder="Your Username" {...SignUpForm.getInputProps("username")} />
					<PasswordInput required label="Password" placeholder="Password" {...SignUpForm.getInputProps("password")} />
					<PasswordInput
						required
						label="Confirm Password"
						placeholder="Confirm Password"
						{...SignUpForm.getInputProps("confirmPassword")}
					/>
					<Autocomplete
						required
						label="Account Type"
						placeholder="Select Account Type"
						data={types}
						{...SignUpForm.getInputProps("permissionLevel")}
					/>

					<Group position="right" mt="md">
						<Button type="submit">Sign Up</Button>
					</Group>
				</form>
			</Box>
		</div>
	);
};

export default SignUpForm;
