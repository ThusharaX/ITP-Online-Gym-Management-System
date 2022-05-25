import React from "react";
import { createStyles, Grid, Paper, Text, ThemeIcon, ActionIcon, Group } from "@mantine/core";
import { ColorSwatch, Bookmark, Heart, Share } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		width: "500px",
		cursor: "pointer",
		backgroundColor: "#FFEFD5",
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
}));

function Cards() {
	const { classes } = useStyles();
	return (
		<Grid justify="center" align="flex-end">
			<Grid.Col span={4}>
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
			<Grid.Col span={4}>
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
			<Grid.Col span={4}>
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
			<Grid.Col span={4}>
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
			<Grid.Col span={4}>
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
	);
}
export default Cards;
