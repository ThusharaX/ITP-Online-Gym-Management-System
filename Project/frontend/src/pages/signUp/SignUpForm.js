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
	useMantineTheme,
	Center,
	Title,
} from "@mantine/core";
import { X } from "tabler-icons-react";

import UserContext from "../../contexts/UserContext";

const SignUpForm = () => {
	const { signUp, SignUpForm, isLoggedIn, isLoading, message } = useContext(UserContext);
	const theme = useMantineTheme();

	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.8)), ";
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";

	const types = ["MEMBER", "EMPLOYEE"];

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://images.alphacoders.com/692/692037.jpg)",
				marginTop: "-120px",
				height: "120vh",
				width: "100%",
				padding: "70px 0px",
			})}
		>
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

			<Box
				sx={(theme) => ({
					marginTop: 50,
					marginLeft: 450,
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
					border: "1px solid",
					borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
					boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
					textAlign: "center",
					padding: theme.spacing.md,
					borderRadius: theme.radius.md,
					width: "600px",
					height: "700px",
					borderRadius: "50px",
					paddingTop: "30px",
					opacity: 0.9,
				})}
			>
				<Title
					align="center"
					sx={(theme) => ({ color: TitleColor, fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 800 })}
				>
					Sign Up
				</Title>
				<br />
				<br />
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

					<Group position="center" mt="md">
						<Button type="submit">Sign Up</Button>
					</Group>
				</form>
			</Box>
		</Box>
	);
};

export default SignUpForm;
