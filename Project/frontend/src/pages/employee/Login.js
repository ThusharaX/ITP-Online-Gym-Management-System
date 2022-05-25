import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	TextInput,
	PasswordInput,
	Button,
	Group,
	Box,
	Checkbox,
	Anchor,
	Text,
	Title,
	useMantineTheme,
	Notification,
} from "@mantine/core";
import { X } from "tabler-icons-react";

import EmployeeContext from "../../contexts/EmployeeContext";

export function Login() {
	const navigate = useNavigate();
	const { login, form, isLoggedIn, isLoading, message } = useContext(EmployeeContext);
	const theme = useMantineTheme();
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				marginTop: "-120px",
				height: "100vh",
				width: "100%",
				padding: "70px 0px",
			})}
		>
			{isLoggedIn ? (
				<p>You are logged in!</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				<Box
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						border: "1px solid",
						borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
						boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
						textAlign: "left",
						padding: "2rem",
						borderRadius: "20px",
						width: "350px",
						cursor: "pointer",
						borderRadius: "50px",
						margin: "100px auto",
						opacity: 0.9,

						"&:hover": {
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
						},
					})}
				>
					<Title
						align="center"
						sx={(theme) => ({ color: TitleColor, fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
					>
						Welcome back!
					</Title>
					<Text color="dimmed" size="sm" align="center" mt={5}>
						Do not have an account yet?{" "}
						<Anchor
							href="#"
							size="sm"
							onClick={() => {
								navigate("/signUp");
							}}
						>
							Create account
						</Anchor>
					</Text>
					{/* if response has message, display it */}
					{message && (
						<Notification icon={<X size={18} />} color="red" title="eror">
							{message}
						</Notification>
					)}
					<form onSubmit={form.onSubmit((values) => login(values))}>
						<div style={{ marginTop: "25px" }}>
							<TextInput label="User Name" placeholder="User Name" required {...form.getInputProps("username")} />
							<PasswordInput
								label="Password"
								placeholder="Your password"
								required
								mt="md"
								{...form.getInputProps("password")}
							/>
							<Group style={{ margin: "-5px 20px 0px 0px " }} position="center" mt="md">
								<Button color={"cyan"} radius={"md"} mt="xl" type="submit" sx={{ width: 150 }}>
									Sign in
								</Button>
							</Group>
						</div>
					</form>
				</Box>
			)}
		</Box>
	);
}

export default Login;
