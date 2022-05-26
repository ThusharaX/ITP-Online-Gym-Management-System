import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TrainerContext from "../../contexts/TrainerContext";
import { Box, Card, Text, Button, Group, createStyles, Avatar, useMantineTheme } from "@mantine/core";
import { ChevronLeft, PhoneCall, BrandGmail, Friends } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	icon: {
		color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
	},

	name: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));

const TrainerList = () => {
	const theme = useMantineTheme();
	const navigate = useNavigate();
	const { classes } = useStyles();
	const { trainers } = useContext(TrainerContext);
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const bg = theme.colorScheme === "dark" ? "#222" : "#ddd";

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://wallpapercave.com/wp/wp6714633.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			})}
			style={{
				margin: "0 auto",
				border: "2px solid #ccc",
				borderRadius: "md",
				width: "100%",
				padding: "100px 20px 50px 20px",
				height: "100%",
				minHeight: "100vh",
				marginTop: "-110px",
				marginBottom: "-125px",
			}}
		>
			<Group position="left">
				<Button
					color="red"
					variant="subtle"
					onClick={() => {
						navigate("/dashboard");
					}}
				>
					<ChevronLeft size={30} strokeWidth={2} color={"#bf7240"} />
					Back To Home
				</Button>
			</Group>

			<Group style={{ marginTop: "80px" }} position="center" spacing={50}>
				{trainers.map((item) => (
					<div key={item._id}>
						<Card
							sx={(theme) => ({
								backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],

								border: "2px solid",
								borderColor: theme.colorScheme === "dark" ? theme.colors.gray[9] : theme.colors.gray[4],
								boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
								"&:hover": {
									backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
									boxShadow: theme.colorScheme === "dark" ? "0px 2px 15px 3px #777" : "0px 3px 20px 2px #bbb",
								},
							})}
							radius="md"
							p="md"
							withBorder
							style={{ width: "350px" }}
						>
							<Group noWrap>
								<Group style={{ maxWidth: "100px" }} position="center" spacing={5}>
									<Avatar src={item.avatar} size={94} radius="md" />
									<Text size="xs" sx={{}} weight={700} color="dimmed">
										#{item.username}
									</Text>
								</Group>
								<div>
									<Text size="lg" weight={500} className={classes.name}>
										{item.firstName} {item.lastName}
									</Text>

									<Group noWrap spacing={10} mt={5}>
										<PhoneCall size={16} className={classes.icon} />
										<Text size="xs" color="dimmed">
											DOB:
										</Text>
										<Text size="xs" color="dimmed">
											{(item.dob || "").split("T")[0]}
										</Text>
									</Group>
									<Group noWrap spacing={10} mt={5}>
										<Friends size={16} className={classes.icon} />
										<Text size="xs" color="dimmed">
											Gender:
										</Text>
										<Text size="xs" color="dimmed">
											{item.gender}
										</Text>
									</Group>
									<Group noWrap spacing={10} mt={5}>
										<PhoneCall size={16} className={classes.icon} />
										<Text size="xs" color="dimmed">
											Contact:
										</Text>
										<Text size="xs" color="dimmed">
											{item.phoneNumber}
										</Text>
									</Group>
									<Group noWrap spacing={10} mt={5}>
										<BrandGmail size={16} className={classes.icon} />
										<Text size="xs" color="dimmed">
											Email:
										</Text>
										<Text size="xs" color="dimmed">
											{item.email}
										</Text>
									</Group>
								</div>
							</Group>
						</Card>
					</div>
				))}
			</Group>
		</Box>
	);
};

export default TrainerList;
