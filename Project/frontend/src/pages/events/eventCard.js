import React, { useContext } from "react";

import EventContext from "../../contexts/EventContext";

import { Card, Image, Text, Badge, Button, Group, useMantineTheme, ScrollArea } from "@mantine/core";

// const clickHandler = () => {
//   console.log("clicked");
//   alert("clicked");
// };

const EventList = () => {
	const { events, confirmDelete } = useContext(EventContext);

	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
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
								{String(item.date)}
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

						<ScrollArea style={{ height: 100, marginTop: "10px" }} scrollbarSize={3} scrollHideDelay={100}>
							<Text size="sm" style={{ margin: "-50px -40px 0px -40px", color: secondaryColor, lineHeight: 1.5 }}>
								{item.description}
							</Text>
						</ScrollArea>
						<Group position="center" style={{ marginTop: "20px" }}>
							<Button onClick={() => confirmDelete(item._id)} compact variant="light" color="red">
								Delete
							</Button>
							<Button onClick={() => confirmDelete(item._id)} compact variant="light" color="blue">
								update
							</Button>
						</Group>
					</Card>
					<br />
				</div>
			))}
		</>
	);
};

export default EventList;
