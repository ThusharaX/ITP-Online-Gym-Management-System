import React, { useContext } from "react";
import { Button, Grid, Skeleton, Container, Card, Image, Text, Badge, Group, useMantineTheme } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";

const QuestionList = () => {
	const { questions, confirmDelete } = useContext(QuestionContext);

	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
			<Container my="md" background>
				<Grid>
					{questions.map((item) => (
						<Grid.Col xs={6} key={item._id}>
							<Card shadow="sm" p="lg">
								<h3>
									<Card.Section align="right">{item.name}</Card.Section>
								</h3>

								<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
									<Text weight={500} align="center">
										Related to {item.title}
									</Text>
									<Badge color="pink" variant="light">
										New Questios
									</Badge>
									<Text>{item.created_at.$date}</Text>
								</Group>

								<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
									{item.content}
								</Text>
								{/* <Button onClick={() => confirmDelete(item._id)} color="red" compact>
									Delete
								</Button> */}
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default QuestionList;
