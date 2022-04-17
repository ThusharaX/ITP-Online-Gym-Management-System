import React, { useContext } from "react";
import TrainerContext from "../../contexts/TrainerContext";
import { Card, Text, Button, Group, useMantineTheme, createStyles, Avatar } from "@mantine/core";
import { PhoneCall, BrandGmail, Friends } from "tabler-icons-react";
// import { TrainerProvider } from "../../contexts/TrainerContext";
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
		<>
			{/* <TrainerContext.TrainerProvider> */}
			<Group position="apart" spacing={"md"}>
				<Button color="red" variant="subtle">
					Back To Home
				</Button>
				<Button variant="light" color="violet">
					Add a Trainer
				</Button>
			</Group>

			<div style={{ border: "2px solid #ccc", borderRadius: "20px", width: "100%", padding: "50px 20px 50px 20px" }}>
				<Group position="center" spacing={50}>
					{trainers.map((item) => (
						<div key={item.id}>
							<Card shadow="lg" radius="lg" p="md" withBorder style={{ width: "350px" }}>
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
			</div>
			{/* </TrainerContext.TrainerProvider> */}
		</>
	);
};

export default TrainerList;
