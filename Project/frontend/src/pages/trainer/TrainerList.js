import React, { useContext } from "react";
import TrainerContext from "../../contexts/TrainerContext";
import { Box, Card, Text, Button, Group, useMantineTheme, createStyles, Avatar } from "@mantine/core";
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
	const { classes } = useStyles();
	const { trainers } = useContext(TrainerContext);

	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
			})}
			style={{
				margin: "0 auto",
				border: "2px solid #ccc",
				borderRadius: "md",
				width: "100%",
				padding: "50px 20px 50px 20px",
				height: "100%",
			}}
		>
			<Group position="left" spacing={0}>
				<ChevronLeft size={30} strokeWidth={2} color={"#bf7240"} />
				<Button color="red" variant="subtle">
					Back To Home
				</Button>
			</Group>

			<Group style={{ marginTop: "30px" }} position="center" spacing={50}>
				{trainers.map((item) => (
					<div key={item.id}>
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
									<Avatar src={item.pUrl} size={94} radius="md" />
									<Text size="xs" sx={{}} weight={700} color="dimmed">
										#{item.uName}
									</Text>
								</Group>
								<div>
									<Text size="lg" weight={500} className={classes.name}>
										{item.fName} {item.lName}
									</Text>

									<Group noWrap spacing={10} mt={5}>
										<PhoneCall size={16} className={classes.icon} />
										<Text size="xs" color="dimmed">
											DOB:
										</Text>
										<Text size="xs" color="dimmed">
											{item.dob}
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
											{item.pNumber}
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
