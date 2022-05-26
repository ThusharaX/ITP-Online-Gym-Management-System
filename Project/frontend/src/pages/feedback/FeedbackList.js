import React, { useContext } from "react";
import { Button, Grid, Skeleton, Container, Card, Image, Text, Badge, Group, useMantineTheme } from "@mantine/core";
// import EditFeedback from "./EditFeedback";
import FeedbackContext from "../../contexts/FeedbackContext";

const child = <Skeleton height={140} radius="md" animate={false} />;

const FeedbackList = () => {
	const { feedbacks, confirmDelete } = useContext(FeedbackContext);
	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
			<Container my="md" background>
				<Grid>
					{feedbacks.map((item) => (
						<Grid.Col xs={6} key={item._id}>
							{/* <strong>ID:</strong> {item._id} */}
							{/* <br />|<strong>Email :</strong> {item.email} */}
							{/* <br />|<strong></strong> {item.displayname}
									<br />
									<strong>Feedback title:</strong> {item.ftitle}
									<br /> {item.feedback} */}

							{/* <Button onClick={() => confirmDelete(item._id)} color="red" compact>
							Delete
						</Button> */}
							{/* <EditFeedback feedback={item} /> */}

							<Card shadow="sm" p="lg">
								<h2>
									{" "}
									<Card.Section>{item.displayname}</Card.Section>
								</h2>

								<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
									<Text weight={500}>{item.ftitle}</Text>
									<Badge color="pink" variant="light">
										Latest Feedback
									</Badge>
								</Group>

								<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
									{item.feedback}
								</Text>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default FeedbackList;
