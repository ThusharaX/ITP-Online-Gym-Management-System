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
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Sun, Moon, Dashboard, UserCircle, CalendarEvent } from "tabler-icons-react";

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
		{ link: "/workoutProgram", label: "Workout Programs" },
		{ link: "/workout", label: "Workouts" },
		{ link: "/blogs", label: "Blogs" },
		{ link: "/package", label: "Packages" },
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
		<Header height={60} mb={0}>
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

					{/* {localStorage.getItem("permissionLevel") === "ADMIN" ? <p>Admin</p> : (localStorage.getItem("permissionLevel") === "TRAINER") ? <p>Trainer</p> : <p>User</p>} */}

					{/* Admin Menu */}
					{localStorage.getItem("permissionLevel") === "ADMIN" ? (
						<Menu control={<Button variant="outline">Admin</Button>}>
							<Menu.Label>Admin</Menu.Label>
							<Link className={classes.link} to="/admin/profile">
								<Menu.Item icon={<UserCircle size={14} />}>Profile</Menu.Item>
							</Link>
							<Link className={classes.link} to="/admin">
								<Menu.Item icon={<Dashboard size={14} />}>Admin Dashboard</Menu.Item>
							</Link>
						</Menu>
					) : (
						<p></p>
					)}

					{/* Trainer Menu */}
					{localStorage.getItem("permissionLevel") === "TRAINER" ? (
						<Menu control={<Button variant="outline">Trainer</Button>}>
							<Menu.Label>Trainer</Menu.Label>
							<Link className={classes.link} to="/trainers/profile">
								<Menu.Item icon={<UserCircle size={14} />}>Profile</Menu.Item>
							</Link>
							<Link className={classes.link} to="/trainers/events">
								<Menu.Item icon={<CalendarEvent size={14} />}>Manage Events</Menu.Item>
							</Link>
							<Link className={classes.link} to="/trainers">
								<Menu.Item icon={<Dashboard size={14} />}>Trainer Dashboard</Menu.Item>
							</Link>
						</Menu>
					) : (
						<p></p>
					)}

					{/* Member Menu */}
					{localStorage.getItem("permissionLevel") === "MEMBER" ? (
						<Menu control={<Button variant="outline">Member</Button>}>
							<Menu.Label>Member</Menu.Label>
							<Link className={classes.link} to="/member/profile">
								<Menu.Item icon={<UserCircle size={14} />}>Profile</Menu.Item>
							</Link>

							<Link className={classes.link} to="/member">
								<Menu.Item icon={<Dashboard size={14} />}>Member Dashboard</Menu.Item>
							</Link>
						</Menu>
					) : (
						<p></p>
					)}
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

				{localStorage.getItem("authToken") ? (
					<Button onClick={logout}>Logout</Button>
				) : (
					<>
						<Button onClick={() => navigate("/login")}>Login</Button>
						<Button onClick={() => navigate("/signUp")}>Register</Button>
					</>
				)}

				<Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm" />
			</Container>
		</Header>
	);
}
export default NavBar;
