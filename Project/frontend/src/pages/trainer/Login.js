import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	useMantineTheme,
	TextInput,
	PasswordInput,
	Checkbox,
	Anchor,
	Title,
	Text,
	Group,
	Box,
	Button,
} from "@mantine/core";
import TrainerContext from "../../contexts/TrainerContext";

export function Login() {
	const navigate = useNavigate();
	const { login, lform, isLoggedIn, isLoading } = useContext(TrainerContext);
	const theme = useMantineTheme();
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://images.alphacoders.com/692/692039.jpg)",
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
								navigate("/trainers/register");
							}}
						>
							Create account
						</Anchor>
					</Text>
					<form onSubmit={lform.onSubmit((values) => login(values))}>
						<div style={{ marginTop: "25px" }}>
							<TextInput label="Email" placeholder="you@mantine.dev" required {...lform.getInputProps("username")} />
							<PasswordInput
								label="Password"
								placeholder="Your password"
								required
								mt="md"
								{...lform.getInputProps("password")}
							/>
							<Group position="apart" mt="md">
								<Checkbox label="Remember me" />
								<Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
									Forgot password?
								</Anchor>
							</Group>
							<Group style={{ margin: "-5px 20px 0px 0px " }} position="right" mt="md">
								<Button color={"cyan"} radius={"md"} mt="xl" type="submit">
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
