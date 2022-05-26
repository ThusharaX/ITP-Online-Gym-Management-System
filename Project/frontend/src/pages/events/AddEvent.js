import React, { useContext, useState } from "react";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
	Modal,
	Button,
	TextInput,
	Group,
	Box,
	Textarea,
	RadioGroup,
	Radio,
	Title,
	Divider,
	Image,
	useMantineTheme,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { DatePicker, TimeInput } from "@mantine/dates";
import EventContext from "../../contexts/EventContext";

const AddEvent = () => {
	const theme = useMantineTheme();
	const { addEvent, form, eventStatus, setEventStatus } = useContext(EventContext);
	const [opened, setOpened] = useState(false);
	const [value, onChange] = useState(new Date());
	const [value1, onChange1] = useState(new Date());

	const [imgUrl, setImgUrl] = useState(null);
	const [progresspercent, setProgresspercent] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		const file = e.target[0]?.files[0];

		if (!file) return;

		const storageRef = ref(storage, `events/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgUrl(downloadURL);
					form.setFieldValue("url", downloadURL);
				});
			}
		);
	};

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
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				withCloseButton={false}
				transition="fade"
				transitionDuration={600}
				overlayOpacity={0.75}
				size={510}
				style={{ borderRadius: "100px", opacity: 0.97, marginTop: "60px" }}
			>
				<Box
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						textAlign: "left",
						margin: "-40px",
						padding: theme.spacing.xl,
						borderRadius: theme.radius.xs,
						width: "500px",
						cursor: "pointer",
						borderRadius: "30px",
						border: "1px solid #bbb",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
						opacity: 1,

						"&:hover": {
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
						},
					})}
				>
					<Title align="center" order={1}>
						Add an Event
					</Title>
					<Divider my="sm" size={"md"} />

					<form
						onSubmit={form.onSubmit((values) => {
							notify();
							addEvent(values);
							form.reset();
							setOpened(false);
						})}
					>
						<Group position="center" style={{ marginTop: "20px" }}>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="Title"
								placeholder="Enter Title"
								{...form.getInputProps("title")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="Tags"
								placeholder="Enter Tags"
								{...form.getInputProps("tags")}
							/>
						</Group>
						<Textarea
							size="md"
							required
							label="Description"
							placeholder="Event Description"
							{...form.getInputProps("description")}
							autosize
							minRows={1}
							maxRows={10}
							style={{ marginTop: "35px" }}
						/>
						<Group spacing={40} position="left" style={{ marginTop: "40px" }}>
							<DatePicker
								size="md"
								placeholder="Select date"
								label="Select Date"
								required
								value={value}
								onChange={onChange}
								{...form.getInputProps("date")}
							/>
							<TimeInput
								size="md"
								label="Select Time"
								value={value1}
								onChange={onChange1}
								required
								{...form.getInputProps("time")}
							/>
						</Group>
						<Group spacing={5} position="left" style={{ marginTop: "20px" }}>
							<div style={{ height: "120px", maxWidth: "340px", backgroundColor: "" }}>
								<input form="saveImg" type="file" required />
								<Button color={"teal"} form="saveImg" type="submit" compact>
									Upload
								</Button>

								{!imgUrl && (
									<div className="outerbar">
										<div className="innerbar" style={{ width: `${progresspercent}%` }}>
											{progresspercent}%
										</div>
									</div>
								)}
								{imgUrl && (
									<Image
										radius="md"
										style={{ marginRight: "30px", margin: "10px 0px 0px 2px" }}
										src={imgUrl}
										alt="uploaded file"
										height={120}
									/>
								)}
							</div>
							<RadioGroup
								style={{ border: " 1px solid #ddd", padding: "14px", borderRadius: "5px", margin: "20px 0px 0px 10px" }}
								size="md"
								orientation="vertical"
								label="Can Join"
								color="gray"
								required
								{...form.getInputProps("gender")}
							>
								<Radio value="Boys" label="Only for Boys" />
								<Radio value="Girls" label="Only for Girls" />
								<Radio value="Both" label="Both Can Join" />
							</RadioGroup>
						</Group>
						<TextInput
							size="md"
							width={500}
							required
							label="Details"
							placeholder="Enter Details"
							style={{ marginTop: "30px", marginBottom: "30px" }}
							{...form.getInputProps("details")}
						/>

						<Divider my="sm" size={"md"} />
						<Group spacing={130} style={{ marginTop: "15px" }} position="center" mt="md">
							<Button color={"cyan"} type="submit" radius="3px" size="xl" compact>
								Submit
							</Button>
							<Button onClick={() => setOpened(false)} color={"red"} type="button" radius="3px" size="xl" compact>
								Cancel
							</Button>
						</Group>
					</form>
					<form id="saveImg" onSubmit={handleSubmit} className="form"></form>
				</Box>
			</Modal>
			<Group position="center">
				<Button
					size="md"
					color={"cyan"}
					onClick={() => {
						setOpened(true);
						notify();
					}}
				>
					Add Event
				</Button>
			</Group>
		</>
	);
};

export default AddEvent;
