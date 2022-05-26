import { SimpleGrid, Card, Text, useMantineTheme, Title, Button, Group } from "@mantine/core";
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
	const TextColor = theme.colorScheme === "dark" ? "#eee" : "#111";
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.4)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const gradientHover =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.7)), ";
	const bg = theme.colorScheme === "dark" ? "#222" : "#ddd";

	let cardTheme = (theme, x, y) => ({
		backgroundImage: gradient + url[x],
		boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #aaa" : "5px 5px 25px #aaa",

		backgroundPosition: "0% " + y + "%",
		"&:hover": {
			backgroundImage: gradientHover + url[x],
		},
	});
	let cardStyle = {
		padding: "35px 30px 40px 5%",
		margin: "0px 0px 0px 5%",
		borderRadius: "md",
		width: "90%",
		height: "100%",
		display: "flex",
		border: "1px solid #333",
		flexDirection: "column",
	};
	let cardTitleSx = (theme) => ({
		color: "#eee",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
		color: TextColor,
		marginTop: 10,
	});
	let cardTextSx = { width: "70%", marginTop: "30px", color: TextColor };

	return (
		<SimpleGrid
			style={{ backgroundColor: bg, marginTop: "-70px", marginBottom: "-120px", padding: "60px 0px 100px 0px" }}
			cols={1}
			spacing="xs"
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://wallpapercave.com/wp/wp6714633.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			})}
		>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Group style={{ marginLeft: "10%" }}>
				<Button
					// shadow="lg"
					// sx={cardTheme(theme, 2, 10)}
					// style={cardStyle}
					// p="xl"
					// component="a"
					// href=""
					style={{ width: "100px", marginBottom: "20px" }}
					color="gray"
					compact
					onClick={() => {
						navigate("/trainers/list");
					}}
				>
					Trainers list
				</Button>
				<Button
					// shadow="lg"
					// sx={cardTheme(theme, 2, 10)}
					// style={cardStyle}
					// p="xl"
					// component="a"
					// href=""
					style={{ width: "170px", marginBottom: "20px" }}
					color="gray"
					compact
					onClick={() => {
						navigate("/event-report");
					}}
				>
					Event Interest Report
				</Button>
			</Group>

			<Card
				sx={cardTheme(theme, 0, 10)}
				style={{ ...cardStyle }}
				shadow="sm"
				p="xl"
				component="a"
				href=""
				onClick={() => {
					navigate("/trainers/profile");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					PROFILE
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
					If you have an account, you can manage your account settings, view your subscriptions, and view your billing
					history. You can also change your password. Within this account the trainer can access all the meterials
					required to prepare, process and deliver the training.
				</Text>
			</Card>

			<Card
				shadow="lg"
				sx={cardTheme(theme, 2, 10)}
				style={cardStyle}
				p="xl"
				component="a"
				href=""
				onClick={() => {
					navigate("/trainers/events");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					MANAGE EVENTS
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
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
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					REQUEST MANAGEMENT
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
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
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					WORKOUT SCHEDULES
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
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
					navigate("/bd");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					BLOGS
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
					If you have an account, you can manage your account settings, view your subscriptions, and view your billing
					history. You can also change your password. Within this account the trainer can access all the meterials
					required to prepare, process and deliver the training.
				</Text>
			</Card>
		</SimpleGrid>
	);
}
