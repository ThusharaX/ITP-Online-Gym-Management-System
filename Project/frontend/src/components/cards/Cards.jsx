import { Badge, Button, Card, Grid, Group, Image, Paper, Text, useMantineTheme } from "@mantine/core";
import LightDarkButton from "../lightDarkButton/LightDarkButton";

function Cards() {
	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<Grid justify="space-around">
			<Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
				<Card shadow="sm" padding="lg">
					<Card.Section>
						<Image
							src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							height={160}
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

					<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
						Know More
					</Button>
				</Card>
			</Grid.Col>
			<Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
				<Card shadow="sm" padding="lg">
					<Card.Section>
						<Image
							src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							height={160}
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

					<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
						Know More
					</Button>
				</Card>
			</Grid.Col>
			<Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
				<Card shadow="sm" padding="lg">
					<Card.Section>
						<Image
							src="https://images.pexels.com/photos/1552245/pexels-photo-1552245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							height={160}
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

					<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
						Know More
					</Button>
				</Card>
			</Grid.Col>
		</Grid>
	);
}

export default Cards;
