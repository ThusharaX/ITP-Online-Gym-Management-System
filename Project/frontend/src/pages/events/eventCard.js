import React, { useContext } from "react";
import { Trash } from "tabler-icons-react";
import EventContext from "../../contexts/EventContext";
import Search from "./search";
import { Divider, Box, Card, Image, Text, Badge, Button, Group, useMantineTheme, ScrollArea } from "@mantine/core";
import EditEvent from "./EditEvent";
import AddEvent from "./AddEvent";
import { showNotification } from "@mantine/notifications";

const EventList = () => {
	const { events, confirmDelete, eventStatus, setEventStatus } = useContext(EventContext);

	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const bg = theme.colorScheme === "dark" ? "#222" : "#ddd";

	const notify = () => {
		setTimeout(() => {
			if (eventStatus < 100) {
				notify();
			} else {
				if (eventStatus == 201) {
					showNotification({
						title: "Event RSVP Successfully",
					});
				} else {
					showNotification({
						title: "Error While RSVP Event",
						color: "red",
					});
				}
				setEventStatus(0);
			}
		}, 200);
	};

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://wallpapercave.com/wp/wp6714633.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
				filter: blur("8px"),
				minHeight: "100vh",
			})}
			style={{
				margin: "0 auto",

				border: "1px solid #ccc",
				borderRadius: "5px",
				width: "99.9%",
				height: "100%",
				marginTop: "-110px",
				marginBottom: "-120px",
				paddingBottom: "100px",
			}}
		>
			<Group position="right" style={{ margin: " 100px 150px 30px 0px" }}>
				<AddEvent />
			</Group>
			<Divider my="sm" />
			<Search />
			<Group style={{ marginTop: "50px" }} position="center" spacing={60}>
				{events.map((item) => (
					<div key={item._id}>
						<Card
							sx={(theme) => ({
								border: "2px solid",
								borderColor: theme.colorScheme === "dark" ? theme.colors.gray[1] : theme.colors.gray[6],
								boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
								"&:hover": {
									backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
									boxShadow: theme.colorScheme === "dark" ? "0px 2px 15px 3px #777" : "0px 3px 20px 2px #bbb",
								},
								opacity: 0.9,
							})}
							radius="md"
							p="md"
							withBorder
							style={{ width: "300px" }}
						>
							<Card.Section>
								<Image
									src={
										!("url" in item)
											? "https://media.istockphoto.com/photos/cat-bodybuilder-with-dumbbells-picture-id1131760920?k=20&m=1131760920&s=612x612&w=0&h=5jEgzdmLx4HpFy_4Df_BBs0SsxXDdnby5NjsDpHxceY="
											: item.url
									}
									height={160}
									alt="Norway"
								/>
							</Card.Section>

							<Text weight={500} style={{ marginTop: "5px", fontSize: "18px" }}>
								{item.title}
							</Text>
							<Text size="xs" style={{ color: secondaryColor }}>
								{item.tags.map((tag) => (
									<Badge size="xs" key={tag} variant="outline" color="primary" mr={2}>
										{tag}
									</Badge>
								))}
							</Text>
							<Group position="left" style={{ marginTop: "15px" }}>
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
								<Button
									leftIcon={<Trash size={18} />}
									size="md"
									onClick={() => {
										confirmDelete(item._id);
										notify();
									}}
									compact
									color="red"
								>
									Delete
								</Button>

								<EditEvent event={item} />
							</Group>
						</Card>
					</div>
				))}
			</Group>
		</Box>
	);
};

export default EventList;
