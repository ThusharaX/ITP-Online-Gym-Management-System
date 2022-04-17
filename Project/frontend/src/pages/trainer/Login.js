import React from "react";
import { TextInput, PasswordInput, Checkbox, Anchor, Title, Text, Group, Box, Button } from "@mantine/core";

export function Login() {
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
				textAlign: "left",
				padding: "2rem",
				borderRadius: theme.radius.md,
				width: "350px",
				cursor: "pointer",
				borderRadius: "50px",
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",

				"&:hover": {
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
				},
			})}
		>
			<Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
				Welcome back!
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Do not have an account yet?{" "}
				<Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
					Create account
				</Anchor>
			</Text>
			<div style={{ marginTop: "25px" }}>
				<TextInput label="Email" placeholder="you@mantine.dev" required />
				<PasswordInput label="Password" placeholder="Your password" required mt="md" />
				<Group position="apart" mt="md">
					<Checkbox label="Remember me" />
					<Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Group style={{ margin: "-5px 20px 0px 0px " }} position="right" mt="md">
					<Button radius={"md"} mt="xl">
						Sign in
					</Button>
				</Group>
			</div>
		</Box>
	);
}
