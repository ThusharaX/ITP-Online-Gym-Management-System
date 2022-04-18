import React, { useContext } from "react";

import EventContext from "../../contexts/EventContext";

import { Card, Image, Text, Badge, Button, Group, useMantineTheme, ScrollArea } from "@mantine/core";
import EditEvent from "./EditEvent";
import AddEvent from "./AddEvent";

const EventList = () => {
	const { events, confirmDelete } = useContext(EventContext);

	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
			<Group position="apart" style={{ margin: " 50px 7% 3% 7%" }}>
				<Button>Back to Home</Button>
				<AddEvent />
			</Group>

			<div
				style={{
					margin: "0 auto",
					border: "2px solid #ccc",
					borderRadius: "20px",
					width: "90%",
					padding: "50px 30px 50px 30px",
				}}
			>
				<Group position="center" spacing={50}>
					{events.map((item) => (
						<div key={item._id}>
							<Card shadow="lg" radius="lg" p="md" withBorder style={{ width: "300px" }}>
								<Card.Section>
									<Image
										src="https://media.istockphoto.com/photos/cat-bodybuilder-with-dumbbells-picture-id1131760920?k=20&m=1131760920&s=612x612&w=0&h=5jEgzdmLx4HpFy_4Df_BBs0SsxXDdnby5NjsDpHxceY="
										height={160}
										alt="Norway"
									/>
								</Card.Section>

								<Group position="apart" style={{ marginTop: "4px" }}>
									<Text weight={500} style={{ fontSize: "18px" }}>
										{item.title}
									</Text>
									<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
										{item.tags.map((tag) => (
											<Badge size="xs" key={tag} variant="outline" color="primary" mr={2}>
												{tag}
											</Badge>
										))}
									</Text>
								</Group>
								<Group position="left" style={{ marginTop: "9px" }}>
									<Text weight={400} style={{ fontSize: "15px", marginRight: "40px" }}>
										Date:
									</Text>
									<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
										{new Date(item.date).toString().slice(0, 15)}
									</Text>
								</Group>
								<Group position="left" style={{ marginTop: "4px" }}>
									<Text weight={400} style={{ fontSize: "15px", marginRight: "40px" }}>
										Time:
									</Text>
									<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
										{new Date(item.date).toString().slice(16, 21)}
									</Text>
								</Group>
								<Group position="left" style={{ marginTop: "4px" }}>
									<Text weight={400} style={{ fontSize: "15px", marginRight: "25px" }}>
										Details:
									</Text>
									<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
										{item.details}
									</Text>
								</Group>
								<Group position="left" style={{ marginTop: "4px" }}>
									<Text weight={400} style={{ fontSize: "15px", marginRight: "15px" }}>
										Can Join:
									</Text>
									<Text align="center" size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
										{item.gender}
									</Text>
								</Group>

								<ScrollArea style={{ height: 80, marginTop: "8px" }} scrollbarSize={3} scrollHideDelay={100}>
									<Text size="sm" style={{ margin: "0px 0px 0px 0px", color: secondaryColor, lineHeight: 1.4 }}>
										{item.description}
									</Text>
								</ScrollArea>
								<Group spacing={40} position="center" style={{ marginTop: "20px" }}>
									<Button size="md" onClick={() => confirmDelete(item._id)} compact variant="light" color="red">
										Delete
									</Button>

									<EditEvent event={item} />
								</Group>
							</Card>
						</div>
					))}
				</Group>
			</div>
		</>
	);
};

export default EventList;
