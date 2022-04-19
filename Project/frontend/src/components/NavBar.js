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
	Image,
	Menu,
	Divider,
	Text,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Sun, Moon, Login, Dashboard, Registered } from "tabler-icons-react";

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

function NavBar() {
	const { logout } = useContext(UserContext);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const links = [
		{ link: "/", label: "Home" },
		{ link: "/userLogin", label: "Log In" },
		{ link: "/dashboard", label: "Dashboard" },
		{ link: "/workoutProgram", label: "Workout Programs" },
	];
	const navigate = useNavigate();
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
		<Header height={60} mb={50}>
			<Container className={classes.header}>
				<Link to="/">
					<Image
						width={50}
						src="https://www.designfreelogoonline.com/wp-content/uploads/2020/08/00472-gym-04.png"
					></Image>
				</Link>
				<br />
				<Group spacing={5} className={classes.links}>
					{items}

					{/* Trainer Menu */}
					<Menu control={<Button variant="outline">Trainer</Button>}>
						<Menu.Label>Trainer</Menu.Label>
						<Menu.Item icon={<Login size={14} />}>
							<Link className={classes.link} to="/trainers/login">
								Login
							</Link>
						</Menu.Item>
						<Menu.Item icon={<Registered size={14} />}>
							<Link className={classes.link} to="/trainers/register">
								Register
							</Link>
						</Menu.Item>
						<Menu.Item icon={<Dashboard size={14} />}>
							<Link className={classes.link} to="/trainers">
								Trainer Dashboard
							</Link>
						</Menu.Item>
					</Menu>
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
