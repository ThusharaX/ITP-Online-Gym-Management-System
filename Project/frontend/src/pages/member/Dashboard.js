import { SimpleGrid, Card, Text, useMantineTheme, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();

	const theme = useMantineTheme();

	const TextColor = theme.colorScheme === "dark" ? "#eee" : "#111";

	let cardTheme = (theme) => ({
		boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
	});
	let cardStyle = {
		padding: "35px 30px 40px 5%",
		borderRadius: "md",
		width: "100%",
		height: "100%",
		display: "flex",
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
			style={{ marginTop: "50px", marginBottom: "-120px", padding: "60px 0px 100px 0px" }}
			cols={1}
			spacing="xs"
		>
			<Card
				sx={cardTheme(theme, 0, 10)}
				style={cardStyle}
				shadow="sm"
				p="xl"
				component="a"
				href=""
				onClick={() => {
					navigate("/member/profile");
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
					navigate("/notice");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					NOTICE
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
					If any notices or special situvations we notices you with notice. Regularly check the notice page.
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
					navigate("/personal");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					Create Personal Trainer Request
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
					If you want to request personal trainer. You can request using this card.
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
					navigate("/bd");
				}}
			>
				<Title order={1} className="your-class-name" sx={cardTitleSx}>
					Watch Personal Trainer Details
				</Title>

				<Text color={"#eee"} sx={cardTextSx} weight={500} size="md">
					If you want to know your personal trainer... Try this and view your trainer details.
				</Text>
			</Card>
		</SimpleGrid>
	);
};

export default Dashboard;
