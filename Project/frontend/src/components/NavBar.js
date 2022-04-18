import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";

const NavBar = () => {
	const { logout } = useContext(UserContext);

	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<div style={{ textDecoration: "none" }}>
			<Group position="center" my="xl">
				<SegmentedControl
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

			<h1>NavBar</h1>

			{/* Login */}
			<button>
				<a href="/userLogin">Log In</a>
			</button>

			{/* Logout button */}
			<button onClick={logout}>Logout</button>

			{/* Dashboard button */}
			<button>
				<a href="/dashboard">Dashboard</a>
			</button>
		</div>
	);
};

export default NavBar;
