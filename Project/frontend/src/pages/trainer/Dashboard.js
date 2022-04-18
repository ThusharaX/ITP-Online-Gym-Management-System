import { SimpleGrid, Card, Text, useMantineTheme, Title, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
	const navigate = useNavigate();

	const theme = useMantineTheme();
	let url = [
		"url(https://wallpapercave.com/wp/wp2483051.jpg)",
		"url(https://www.itl.cat/pngfile/big/34-341608_gym-workout-hd-wallpapers-fitness-gym-images-hd.jpg)",
		"url(https://wallpapercave.com/wp/wp2483004.jpg)",
		"url(https://images3.alphacoders.com/608/thumb-1920-608046.jpg)",
		"url(https://images2.alphacoders.com/881/thumb-1920-881921.jpg)",
		"url(https://images.alphacoders.com/608/thumb-1920-608251.jpg)",
	];
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	let cardTheme = (theme, x, y) => ({
		TransitionEvent: {
			transition: "all 0.3s ease-in-out",
			transform: `translate(${x}px, ${y}px)`,
		},
		backgroundColor: theme.colors.gray[0],
		backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)), " + url[x],
		backgroundPosition: "0% " + y + "%",
		"&:hover": {
			backgroundColor: theme.colors.gray[1],

			backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.6)), " + url[x],
		},
	});
	let cardStyle = {
		padding: "50px 30px 50px 50px",
		borderRadius: "md",
		boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	};
	let cardTitleSx = (theme) => ({
		color: "#eee",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
		"&:hover": {
			color: "white",
		},
	});
	let cardTextSx = { width: "70%", marginTop: "20px" };

	return (
		<>
			<SimpleGrid style={{ backgroundColor: "#222" }} cols={1} spacing="xs">
				<Card
					sx={cardTheme(theme, 0, 10)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/trainers/profile");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						PROFILE
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>

				<Card
					sx={cardTheme(theme, 1, 10)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/new-event");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						PUBLISH EVENTS
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>
				<Card
					sx={cardTheme(theme, 2, 10)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/trainers/events");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						MANAGE EVENTS
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>
				<Card
					sx={cardTheme(theme, 3, 15)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/requets");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						REQUEST MANAGEMENT
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>
				<Card
					sx={cardTheme(theme, 4, 15)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/workout-schedules");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						WORKOUT SCHEDULES
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>
				<Card
					sx={cardTheme(theme, 5, 30)}
					style={cardStyle}
					shadow="sm"
					p="xl"
					component="a"
					href=""
					onClick={() => {
						navigate("/blogs");
					}}
				>
					<Title order={2} className="your-class-name" style={{ marginTop: 10 }} sx={cardTitleSx}>
						BLOGS
					</Title>

					<Text color={"#eee"} style={cardTextSx} weight={400} size="sm">
						If you have an account, you can manage your account settings, view your subscriptions, and view your billing
						history. You can also change your password. Within this account the trainer can access all the meterials
						required to prepare, process and deliver the training.
					</Text>
				</Card>
			</SimpleGrid>
		</>
	);
}
