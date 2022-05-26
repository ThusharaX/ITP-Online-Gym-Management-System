import React, { useContext, useEffect, useRef } from "react";
import EventContext from "../../contexts/EventContext";
import { Box, Card, Image, Text, Badge, Button, Group, useMantineTheme, ScrollArea, Select } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

import Search from "./search";
const ReactCard = () => {
	const navigate = useNavigate();
	const user = localStorage.getItem("permissionLevel");
	useEffect(() => {
		if (user == null) {
			navigate("/");
			return alert("You are not logged in");
		}
	}, []);

	const { events, RSVW, reactStatus, setReactStatus } = useContext(EventContext);
	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";

	const notify = () => {
		setTimeout(() => {
			if (reactStatus < 100) {
				notify();
			} else {
				if (reactStatus == 201) {
					showNotification({
						title: "Reaction submited Successfully",
					});
				} else {
					showNotification({
						title: "Error While RSVP Event",
						color: "red",
					});
				}
				setReactStatus(0);
			}
		}, 50);
	};

	const getStatuses = (eid) => {
		let event = events.filter((event) => event._id === eid)[0].users;
		let user = event.filter((user) => user.uid === localStorage.getItem("uID"))[0];
		//return status;
		if (user != undefined) {
			return user.status;
		}
		return "0";
	};

	let statuses = [];
	if (events.length > 0) {
		statuses = events.map((event) => {
			return [event._id, getStatuses(event._id)];
		});
	}

	const setStatus = (val, eid) => {
		let x = 0;
		statuses = statuses.map((status) => {
			if (status[0] === eid) {
				status[1] = val;
				x = 1;
			}
			return status;
		});
		if (x == 0) {
			statuses.push([eid, val]);
		}
	};

	const getStatus = (eid) => {
		let y = statuses.filter((status) => status[0] === eid);
		return y[0][1];
	};

	const getBorderColor = (status) => {
		if (status === "1") {
			return "2.5px solid #afa";
		} else if (status === "2") {
			return "2.5px solid #03a9f4";
		} else if (status === "3") {
			return "2.5px solid #ff7043";
		} else if (status === "4") {
			return "2.5px solid #f44335";
		} else {
			return "2px solid #d7ccc8";
		}
	};

	return (
		<Box
			sx={(theme) => ({
				marginTop: "-130px",
				minHeight: "100vh",
				backgroundImage: gradient + "url(https://wallpapercave.com/wp/wp6714633.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			})}
			style={{
				margin: "0 auto",
				marginTop: "-125px",
				marginBottom: "-125px",
				border: "1px solid #aaa",
				borderRadius: "5px",
				width: "100%",
				padding: "200px 0px 100px 0px",
			}}
		>
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
							// shadow="xl"
							radius="lg"
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
							<ScrollArea style={{ height: 100, marginTop: "10px" }} scrollbarSize={3} scrollHideDelay={100}>
								<Text size="sm" style={{ margin: "0px 0px 0px 0px", color: secondaryColor, lineHeight: 1.5 }}>
									{item.description}
								</Text>
							</ScrollArea>
							<Group spacing={"15px"} position="center" style={{ marginTop: "20px" }}>
								<Select
									style={{ width: "140px", border: getBorderColor(getStatus(item._id)), borderRadius: "5px" }}
									placeholder="Pick one"
									onChange={(val) => setStatus(val, item._id)}
									transition="pop-top-left"
									transitionDuration={80}
									transitionTimingFunction="ease"
									data={[
										{ value: "1", label: "Going" },
										{ value: "2", label: "Interested" },
										{ value: "3", label: "Not Interested" },
										{ value: "4", label: "Not Going" },
									]}
									defaultValue={getStatuses(item._id).toString()}
								/>
								<Button
									style={{ marginTop: "0px" }}
									onClick={() => {
										let stts = getStatus(item._id);
										RSVW(stts, item._id);
										notify();
									}}
									size="lg"
									compact
									color="teal"
								>
									Update
								</Button>
							</Group>
						</Card>
					</div>
				))}
			</Group>
		</Box>
	);
};

export default ReactCard;
