import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const { logout } = useContext(UserContext);

	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<div style={{ backgroundColor: colorScheme === "dark" ? "#373A40" : "#fff" }}>
			<Group position="left" my="xl">
				<style jsx>{`
					.link {
						color: ${colorScheme === "dark" ? "#fff" : "#000"};
						text-decoration: none;
					}
				`}</style>

				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/userLogin">
					Login
				</Link>
				<Link className="link" to="/workoutProgram">
					Workout Programs
				</Link>
				<Link className="link" to="/dashboard">
					Dashboard
				</Link>
				<button onClick={logout}>Logout</button>

				<SegmentedControl
					style={{
						justifyContent: "right",
						margin: "0 auto",
					}}
					value={colorScheme}
					onChange={toggleColorScheme}
					data={[
						{
							value: "light",
							label: (
								<Center>
									<Sun size={16} />
									<Box ml={10}>Light</Box>
								</Center>
							),
						},
						{
							value: "dark",
							label: (
								<Center>
									<Moon size={16} />
									<Box ml={10}>Dark</Box>
								</Center>
							),
						},
					]}
				/>
			</Group>
		</div>
	);
};

export default NavBar;
