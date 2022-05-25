/* eslint-disable indent */
import React, { useContext, useState } from "react";
import {
	Card,
	Text,
	Button,
	Group,
	useMantineTheme,
	Modal,
	Overlay,
	createStyles,
	Title,
	Container,
	SimpleGrid,
} from "@mantine/core";
import BlogContext from "../../contexts/BlogContext";
import { Edit, Trash, Eye } from "tabler-icons-react";
import EditBlog from "./EditBlog";
import View from "./View";

//Today
const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		paddingTop: 250,
		paddingBottom: 250,
		height: "150px",
		backgroundImage:
			"url(https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		backgroundSize: "cover",
		backgroundPosition: "center",

		"@media (max-width: 520px)": {
			paddingTop: 80,
			paddingBottom: 100,
		},
	},

	inner: {
		position: "relative",
		zIndex: 1,
	},

	title: {
		fontWeight: 800,
		fontSize: 40,
		letterSpacing: -1,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		color: theme.white,
		marginBottom: theme.spacing.xs,
		textAlign: "center",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		"@media (max-width: 520px)": {
			fontSize: 28,
			textAlign: "left",
		},
	},

	highlight: {
		color: theme.colors[theme.primaryColor][4],
	},

	description: {
		color: theme.colors.gray[0],
		textAlign: "center",

		"@media (max-width: 520px)": {
			fontSize: theme.fontSizes.md,
			textAlign: "left",
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 1.5,
		display: "flex",
		justifyContent: "center",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,

		"@media (max-width: 520px)": {
			flexDirection: "column",
		},
	},

	control: {
		height: 42,
		fontSize: theme.fontSizes.md,

		"&:not(:first-of-type)": {
			marginLeft: theme.spacing.md,
		},

		"@media (max-width: 520px)": {
			"&:not(:first-of-type)": {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},
	},
	cards: {
		cursor: "pointer",
		overflow: "hidden",
		transition: "transform 150ms ease, box-shadow 100ms ease",
		padding: theme.spacing.xl,
		paddingLeft: theme.spacing.xl * 2,

		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.02)",
		},

		"&::before": {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			width: 6,
			backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
		},
	},

	secondaryControl: {
		color: theme.white,
		backgroundColor: "rgba(255, 255, 255, .4)",

		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, .45) !important",
		},
	},
}));

function BlogList() {
	const { blogs, confirmDelete, editOpened, setEditOpened, setBlog, incrementViewCount } = useContext(BlogContext);
	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	// View Modal
	const [opened, setOpened] = useState(false);

	//Today
	const { classes, cx } = useStyles();

	return (
		<>
			{/* Edit Modal */}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Blog ">
				<EditBlog />
			</Modal>

			{/* View Modal */}
			<Modal opened={opened} onClose={() => setOpened(false)} title="Blog Details" overflow="inside" size="5">
				<View />
			</Modal>

			{/* Today */}
			<div className={classes.wrapper}>
				<Overlay color="#000" opacity={0.65} zIndex={1} />

				<div className={classes.inner}>
					<Title className={classes.title}>
						Increace your mucle power,{" "}
						<Text component="span" inherit className={classes.highlight}>
							Shape your Body
						</Text>
					</Title>

					<Container size={640}>
						<Text size="lg" className={classes.description}>
							Build more reliable service with Mansa Fitness Gym Center. Push through the pain on the other side is the
							reward.
						</Text>
					</Container>

					<div className={classes.controls}>
						<Button className={classes.control} variant="white" size="lg">
							Get started
						</Button>
						<Button className={cx(classes.control, classes.secondaryControl)} size="lg">
							Live demo
						</Button>
					</div>
				</div>
			</div>
			<div>
				<h1 align="center">Our Personal Trainers Details</h1>
			</div>
			<br />
			<br />
			<SimpleGrid
				cols={4}
				spacing="lg"
				breakpoints={[
					{ maxWidth: 1350, cols: 3, spacing: "md" },
					{ maxWidth: 1020, cols: 2, spacing: "sm" },
					{ maxWidth: 675, cols: 1, spacing: "sm" },
				]}
			>
				{blogs.map((item) => (
					<div key={item._id} style={{ width: 340, margin: "auto" }}>
						<Card shadow="xl" p="lg" className={classes.cards}>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								Trainer Name : {item.trname}
							</Text>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								Title : {item.title}
							</Text>

							<hr style={{ border: `1px solid ${secondaryColor}` }} />

							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								Description : {item.description}
							</Text>
							<hr style={{ border: `1px solid ${secondaryColor}` }} />
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								Phone Number : {item.wNum}
							</Text>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								Email : {item.email}
							</Text>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								FaceBook Profile Name : {item.fb}
							</Text>

							{/* On click open modal */}
							<Button
								variant="light"
								color="blue"
								fullWidth
								style={{ marginTop: 14 }}
								onClick={() => {
									setBlog(item);
									setOpened(true);
								}}
							>
								View
							</Button>

							{localStorage.getItem("permissionLevel") === "ADMIN" ||
							localStorage.getItem("permissionLevel") === "TRAINER" ? (
								<Group position="apart" mt="md" spacing="md">
									<Button
										onClick={() => {
											setBlog(item);
											setEditOpened(true);
										}}
										variant="light"
										color="blue"
										compact
										leftIcon={<Edit size={16} />}
									>
										Edit
									</Button>
									<Button onClick={() => confirmDelete(item._id)} color="red" compact leftIcon={<Trash size={16} />}>
										Delete
									</Button>
								</Group>
							) : (
								<p></p>
							)}
						</Card>
					</div>
				))}
			</SimpleGrid>
		</>
	);
}

export default BlogList;
