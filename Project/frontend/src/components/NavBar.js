import React, { useState, useContext } from "react";
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	useMantineColorScheme,
	SegmentedControl,
	Center,
	Box,
	Button,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Sun, Moon } from "tabler-icons-react";

// import { MantineLogo } from "../../shared/MantineLogo";

const useStyles = createStyles((theme) => ({
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			display: "none",
		},
	},

	burger: {
		[theme.fn.largerThan("xs")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
		},
	},
}));

{
	/* <button onClick={logout}>Logout</button>; */
}

function NavBar() {
	const { logout } = useContext(UserContext);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const links = [
		{ link: "/userLogin", label: "Log In" },
		{ link: "/dashboard", label: "Dashboard" },
		{ link: "/logout", label: "Logout" },
	];
	const navigate = useNavigate();
	// eslint-disable-next-line no-console
	console.log(links);
	const [opened, toggleOpened] = useBooleanToggle(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, { [classes.linkActive]: active === link.link })}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				navigate(link.link);
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Header height={60} mb={120}>
			<Container className={classes.header}>
				{/* <MantineLogo /> */}
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

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
				<Button onClick={logout}>Logout</Button>

				<Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm" />
			</Container>
		</Header>
	);
}
export default NavBar;
