import React from "react";
import {
	Badge,
	Button,
	Card,
	Grid,
	Group,
	Image,
	Paper,
	Text,
	useMantineTheme,
	createStyles,
	ThemeIcon,
	ActionIcon,
	Avatar,
	TextInput,
	Title,
	SimpleGrid,
	Col,
	Overlay,
	Container,
	Accordion,
} from "@mantine/core";
import LightDarkButton from "../lightDarkButton/LightDarkButton";
import {
	ColorSwatch,
	Heart,
	Bookmark,
	Share,
	ReceiptOff,
	Flame,
	CircleDotted,
	FileCode,
	Mail,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		width: "500px",
		cursor: "pointer",
		// backgroundColor: "#FFEFD5",
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
	cards: {
		cursor: "pointer",
		overflow: "hidden",
		transition: "transform 150ms ease, box-shadow 100ms ease",
		padding: theme.spacing.xl,
		paddingLeft: theme.spacing.xl * 2,

		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.1)",
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

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	footer: {
		padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
		marginTop: theme.spacing.md,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},

	//new
	wrapper: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing.xl * 2,
		borderRadius: theme.radius.md,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		//backgroundColor: "#FFEFD5",
		border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: "column-reverse",
			padding: theme.spacing.xl,
		},
	},

	image: {
		maxWidth: "40%",

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: "100%",
		},
	},

	body: {
		paddingRight: theme.spacing.xl * 4,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: "flex",
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: "100%",
		flex: "1",
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},

	//again new
	wrappers: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	titles: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 36,
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},
	images: {
		maxWidth: "60%",
		align: "right",

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: "100%",
		},
	},

	//new one
	wrappersX: {
		position: "relative",
		paddingTop: 180,
		paddingBottom: 250,
		backgroundImage:
			"url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		backgroundSize: "cover",
		backgroundPosition: "center",

		"@media (max-width: 520px)": {
			paddingTop: 80,
			paddingBottom: 50,
		},
	},

	inner: {
		position: "relative",
		zIndex: 1,
	},

	titlesX: {
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

	secondaryControl: {
		color: theme.white,
		backgroundColor: "rgba(255, 255, 255, .4)",

		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, .45) !important",
		},
	},

	//QUESTIONS
	wrapperQ: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
	},

	titleQ: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	itemQ: {
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
	},
}));
const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

function Cards() {
	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	const { classes, cx } = useStyles();

	return (
		<>
			<div className={classes.wrappersX}>
				<Overlay color="#000" opacity={0.65} zIndex={1} />

				<div className={classes.inner}>
					<Title className={classes.titlesX}>
						Automated AI code reviews for{" "}
						<Text component="span" inherit className={classes.highlight}>
							any stack
						</Text>
					</Title>

					<Container size={640}>
						<Text size="lg" className={classes.description}>
							Build more reliable software with AI companion. AI is also trained to detect lazy developers who do
							nothing and just complain on Twitter.
						</Text>
					</Container>

					<div className={classes.controls}>
						{/* <Button className={classes.control} variant="white" size="lg">
							Get started
						</Button> */}
						<Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }} size="lg" className={classes.control}>
							Get started
						</Button>
						{/* <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
							Live demo
						</Button> */}
						<Button
							variant="outline"
							outline={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
							size="lg"
							className={classes.control}
						>
							Live demo
						</Button>
					</div>
				</div>
			</div>

			<div>
				<h1 align="center">What We Offer ,Find more About us</h1>
			</div>
			<br />
			<br />

			{/* 1 st section*/}
			<Grid justify="space-around" gutter="sm">
				<Grid.Col style={{ maxWidth: 350 }} xs={4}>
					<Card shadow="sm" padding="lg" style={{ maxWidth: 500 }} className={classes.cards}>
						<Card.Section>
							<Image
								src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={250}
								alt="Norway"
							/>
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>
								30 Day Intitiator Package
								<br />
								<h2 align="center">Rs.66,990/=</h2>
							</Text>
							<Badge color="pink" variant="light">
								On Sale
							</Badge>
						</Group>

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>

						<Button
							fullWidth
							style={{ marginTop: 14 }}
							variant="gradient"
							gradient={{ from: "indigo", to: "cyan" }}
							size="lg"
							className={classes.control}
						>
							Know More
						</Button>
					</Card>
				</Grid.Col>

				<Grid.Col style={{ maxWidth: 350 }} xs={4}>
					<Card shadow="sm" padding="lg" style={{ maxWidth: 500 }} className={classes.cards}>
						<Card.Section>
							<Image
								src="https://images.pexels.com/photos/2204182/pexels-photo-2204182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={250}
								alt="Norway"
							/>
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>
								90 Day Mass Gainer Package
								<br /> <h2 align="center">Rs.99,990/=</h2>
							</Text>
							<Badge color="pink" variant="light">
								On Sale
							</Badge>
						</Group>

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>

						<Button
							fullWidth
							style={{ marginTop: 14 }}
							variant="gradient"
							gradient={{ from: "indigo", to: "cyan" }}
							size="lg"
							className={classes.control}
						>
							Know More
						</Button>
					</Card>
				</Grid.Col>

				<Grid.Col style={{ maxWidth: 350 }} xs={4}>
					<Card shadow="sm" padding="lg" style={{ maxWidth: 500 }} className={classes.cards}>
						<Card.Section>
							<Image
								src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={250}
								alt="Norway"
							/>
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>
								90 Day Mass Gainer Package
								<br /> <h2 align="center">Rs.99,990/=</h2>
							</Text>
							<Badge color="pink" variant="light">
								On Sale
							</Badge>
						</Group>

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>

						<Button
							fullWidth
							style={{ marginTop: 14 }}
							variant="gradient"
							gradient={{ from: "indigo", to: "cyan" }}
							size="lg"
							className={classes.control}
						>
							Know More
						</Button>
					</Card>
				</Grid.Col>

				<Grid.Col style={{ maxWidth: 350 }} xs={4}>
					<Card shadow="sm" padding="lg" style={{ maxWidth: 500 }} className={classes.cards}>
						<Card.Section>
							<Image
								src="https://images.pexels.com/photos/1552245/pexels-photo-1552245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={250}
								alt="Norway"
							/>
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>
								90 Day Shred Package
								<br /> <h2 align="center">Rs.76,990/=</h2>
							</Text>
							<Badge color="pink" variant="light">
								On Sale
							</Badge>
						</Group>

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>

						<Button
							fullWidth
							style={{ marginTop: 14 }}
							variant="gradient"
							gradient={{ from: "indigo", to: "cyan" }}
							size="lg"
							className={classes.control}
						>
							Know More
						</Button>
					</Card>
				</Grid.Col>
			</Grid>

			<br />
			<br />
			<br />
			{/* 2nd section*/}

			{/* <div className={classes.wrapper}>
				<Container size="lg">
					<Grid id="faq-grid" gutter={50}>
						<Col span={12} md={6}>
							<Image
								src="https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg"
								alt="Frequently Asked Questions"
							/>
						</Col>
						<Col span={12} md={6}>
							<Title order={2} align="left" className={classes.titleQ}>
								Frequently Asked Questions
							</Title>

							<Accordion iconPosition="right" initialItem={0}>
								<Accordion.Item label="How can I reset my password?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="Can I create more that one account?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="How can I subscribe to monthly newsletter?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="Do you store credit card information securely?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="What payment systems to you work with?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
							</Accordion>
						</Col>
					</Grid>
				</Container>
			</div> */}

			<br />
			<br />
			<br />
			<br />
			<div>
				<h1 align="center">What We Offer ,Find more About us</h1>
			</div>
			<br />
			<br />

			<Grid justify="space-around" gutter="sm">
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col xs={4}>
					<Paper withBorder radius="md" className={classes.card}>
						<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "pink", to: "orange" }}>
							<ColorSwatch size={28} />
						</ThemeIcon>
						<Text size="xl" weight={500} mt="md">
							90 Day Mass Gainer Package
							<br /> <h2 align="center">Rs.99,990/=</h2>
						</Text>
						<Text size="sm" mt="sm" color="dimmed">
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
							-Online based program designed to help you put on healthy weight
							<br />
							-Ideal for those who are struggling to put on healthy weight
							<br />
							-Includes trainning program , meal plan,Guildlines
							<br />
						</Text>
					</Paper>
				</Grid.Col>
			</Grid>

			<br />
			<br />
			<br />
			{/* 3 rd section*/}

			<div className={classes.wrapper}>
				<Container size="lg">
					<Grid id="faq-grid" gutter={50}>
						<Col span={12} md={6}>
							<Image
								src="https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg"
								alt="Frequently Asked Questions"
							/>
						</Col>
						<Col span={12} md={6}>
							<Title order={2} align="left" className={classes.titleQ}>
								Frequently Asked Questions
							</Title>

							<Accordion iconPosition="right" initialItem={0}>
								<Accordion.Item label="How can I reset my password?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="Can I create more that one account?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="How can I subscribe to monthly newsletter?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="Do you store credit card information securely?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
								<Accordion.Item label="What payment systems to you work with?" className={classes.itemQ}>
									{placeholder}
								</Accordion.Item>
							</Accordion>
						</Col>
					</Grid>
				</Container>
			</div>

			<br />
			<br />
			<br />
			<br />

			<div>
				<h1 align="center">What We Offer ,Find more About us</h1>
			</div>
			<br />
			<br />
			<Grid justify="Space-around" align="Center" gutter="sm">
				<Grid.Col style={{ maxWidth: 200 }} xs={4}>
					<Card withBorder p="lg" radius="md" className={classes.card}>
						<Card.Section mb="sm">
							<Image
								src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={300}
							/>
						</Card.Section>

						<Badge> bag</Badge>

						<Text weight={700} className={classes.title} mt="xs">
							<h1>hey</h1>
						</Text>

						<Group mt="lg">
							<Avatar
								src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								radius="sm"
							/>
							<div>
								<Text weight={500}>tii</Text>
								<Text size="xs" color="dimmed">
									-Online based program designed to help you put on healthy weight
									<br />
								</Text>
							</div>
						</Group>

						<Card.Section className={classes.footer}>
							<Group position="apart">
								<Text size="xs" color="dimmed">
									{classes.footer}
								</Text>
								<Group spacing={0}>
									<ActionIcon>
										<Heart size={18} color={theme.colors.red[6]} />
									</ActionIcon>
									<ActionIcon>
										<Bookmark size={18} color={theme.colors.yellow[6]} />
									</ActionIcon>
									<ActionIcon>
										<Share size={16} color={theme.colors.blue[6]} />
									</ActionIcon>
								</Group>
							</Group>
						</Card.Section>
					</Card>
				</Grid.Col>

				<Grid.Col style={{ maxWidth: 200 }} xs={4}>
					<Card withBorder p="lg" radius="md" className={classes.card}>
						<Card.Section mb="sm">
							<Image
								src="https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={300}
							/>
						</Card.Section>

						<Badge> bag</Badge>

						<Text weight={700} className={classes.title} mt="xs">
							<h1>hey</h1>
						</Text>

						<Group mt="lg">
							<Avatar
								src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								radius="sm"
							/>
							<div>
								<Text weight={500}>tii</Text>
								<Text size="xs" color="dimmed">
									-Online based program designed to help you put on healthy weight
									<br />
								</Text>
							</div>
						</Group>

						<Card.Section className={classes.footer}>
							<Group position="apart">
								<Text size="xs" color="dimmed">
									{classes.footer}
								</Text>
								<Group spacing={0}>
									<ActionIcon>
										<Heart size={18} color={theme.colors.red[6]} />
									</ActionIcon>
									<ActionIcon>
										<Bookmark size={18} color={theme.colors.yellow[6]} />
									</ActionIcon>
									<ActionIcon>
										<Share size={16} color={theme.colors.blue[6]} />
									</ActionIcon>
								</Group>
							</Group>
						</Card.Section>
					</Card>
				</Grid.Col>

				<Grid.Col style={{ maxWidth: 200 }} xs={4}>
					<Card withBorder p="lg" radius="md" className={classes.card}>
						<Card.Section mb="sm">
							<Image
								src="https://images.pexels.com/photos/3253500/pexels-photo-3253500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								height={300}
							/>
						</Card.Section>

						<Badge> bag</Badge>

						<Text weight={700} className={classes.title} mt="xs">
							<h1>hey</h1>
						</Text>

						<Group mt="lg">
							<Avatar
								src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								radius="sm"
							/>
							<div>
								<Text weight={500}>tii</Text>
								<Text size="xs" color="dimmed">
									-Online based program designed to help you put on healthy weight
									<br />
								</Text>
							</div>
						</Group>

						<Card.Section className={classes.footer}>
							<Group position="apart">
								<Text size="xs" color="dimmed">
									{classes.footer}
								</Text>
								<Group spacing={0}>
									<ActionIcon>
										<Heart size={18} color={theme.colors.red[6]} />
									</ActionIcon>
									<ActionIcon>
										<Bookmark size={18} color={theme.colors.yellow[6]} />
									</ActionIcon>
									<ActionIcon>
										<Share size={16} color={theme.colors.blue[6]} />
									</ActionIcon>
								</Group>
							</Group>
						</Card.Section>
					</Card>
				</Grid.Col>
			</Grid>

			<br />

			{/* <div className={classes.wrapper}>
				<div className={classes.body}>
					<Title className={classes.title}>Wait a minute...</Title>
					<Text className={classes.title} weight={500} size="lg" mb={5}>
						Subscribe to our newsletter!
					</Text>
					<Text size="sm" color="dimmed">
						You will never miss important product updates, latest news and community QA sessions. Our newsletter is once
						a week, every Sunday.
					</Text>

					<div className={classes.controls}>
						<TextInput placeholder="Your email" classNames={{ input: classes.input, root: classes.inputWrapper }} />

						<Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }} size="lg" className={classes.control}>
							Subscribe
						</Button>
					</div>
				</div>
				<Image
					src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?t=st=1652835088~exp=1652835688~hmac=2e03989e706a7e3619a8165559fb11d8012fd912b0742303bbd2a707352cbc61&w=996"
					className={classes.image}
				/>
			</div> */}
		</>
	);
}

export default Cards;
