import React, { useContext, useState } from "react";
import {
	Image,
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
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import EventContext from "../../contexts/EventContext";
import { ArrowAutofitUp } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Joi from "joi";
import { useForm, joiResolver } from "@mantine/form";

const EditEvent = ({ event }) => {
	const [opened, setOpened] = useState(false);
	const { updateEvent, eventStatus, setEventStatus } = useContext(EventContext);

	const [imgUrl, setImgUrl] = useState(event.url);
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
					form1.setFieldValue("url", downloadURL);
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
						title: "Event Updated Successfully",
					});
				} else {
					showNotification({
						title: "Error While Updating The Event",
						color: "red",
					});
				}
				setEventStatus(0);
			}
		}, 200);
	};

	const schema = Joi.object({
		id: Joi.required(),
		title: Joi.string().min(10).max(50).message("Title should be between 10 and 50 characters"),
		description: Joi.string().min(15).max(500).message("Description should be between 15 and 500 characters"),
		date: Joi.required(),
		time: Joi.required(),
		tags: Joi.string().min(3).max(50).message("Tags should be between 3 and 50 characters"),
		details: Joi.string().min(5).max(50).message("Details should be between 5 and 50 characters"),
		gender: Joi.string().required(),
		url: Joi.string().required(),
	});
	// Form initial state
	let form1 = useForm({
		schema: joiResolver(schema),
		initialValues: {
			id: event._id,
			title: event.title,
			tags: String(event.tags),
			description: event.description,
			details: event.details,
			gender: event.gender,
			date: new Date(event.date),
			time: new Date(event.date),
			url: event.url,
		},
	});

	const [date, setDate] = useState({ ...form1.getInputProps("date") });
	const [time, setTime] = useState({ ...form1.getInputProps("time") });
	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				withCloseButton={false}
				transition="fade"
				transitionDuration={400}
			>
				<div
					style={{
						margin: "-40px",
						borderRadius: "10px",
						border: "3px solid #ccc",
						width: "540px",
					}}
				>
					<Box
						sx={(theme) => ({
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
							textAlign: "left",
							padding: theme.spacing.xl,
							borderRadius: theme.radius.md,
							width: "500px",
							cursor: "pointer",
							borderRadius: "10px",
							boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
							value: "dfdfdfdfdf",

							"&:hover": {
								backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
							},
						})}
					>
						<Title align="center" order={1}>
							Update The Event
						</Title>
						<Divider my="sm" size={"md"} />
						<form
							onSubmit={form1.onSubmit((values) => {
								updateEvent(values);
								notify();
								form1.reset();
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
									{...form1.getInputProps("title")}
								/>
								<TextInput
									size="md"
									style={{ width: "48%" }}
									required
									label="Tags"
									placeholder="Enter Tags"
									{...form1.getInputProps("tags")}
								/>
							</Group>
							<Textarea
								size="md"
								required
								label="Description"
								placeholder="Event Description"
								{...form1.getInputProps("description")}
								autosize
								minRows={1}
								maxRows={10}
								style={{ marginTop: "35px" }}
							/>
							<Group spacing={40} position="left" style={{ marginTop: "40px" }}>
								{/* DATE */}
								<DatePicker
									size="md"
									placeholder="Select date"
									label="Select Date"
									required
									value={date}
									onChange={setDate}
									{...form1.getInputProps("date")}
								/>
								{/* TIME */}
								<TimeInput
									size="md"
									label="Select Time"
									value={time}
									onChange={setTime}
									required
									{...form1.getInputProps("time")}
								/>
							</Group>
							<Group spacing={5} position="left" style={{ marginTop: "40px" }}>
								<div style={{ height: "120px", maxWidth: "340px", backgroundColor: "" }}>
									{/* <App /> */}
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
									style={{ border: " 1px solid #ddd", padding: "7px", borderRadius: "5px" }}
									size="md"
									orientation="vertical"
									label="Can Join"
									color="gray"
									required
									{...form1.getInputProps("gender")}
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
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("details")}
							/>
							<Divider my="sm" size={"md"} />
							<Group spacing={"140px"} style={{ margin: "20px 0px 10px 0px" }} position="center" mt="md">
								<Button color={"blue[4]"} type="submit" radius="4px" size="xl" compact>
									Submit
								</Button>
								<Button
									onClick={() => {
										setOpened(false);
									}}
									color={"red"}
									type="button"
									radius="4px"
									size="xl"
									compact
								>
									Cancel
								</Button>
							</Group>
							{/* <DropzoneButton /> */}
						</form>
						<form id="saveImg" onSubmit={handleSubmit} className="form"></form>
					</Box>
				</div>
			</Modal>
			<Group position="center">
				<Button leftIcon={<ArrowAutofitUp size={18} />} size="md" onClick={() => setOpened(true)} compact color="blue">
					Update
				</Button>
			</Group>
		</>
	);
};

export default EditEvent;
