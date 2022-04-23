import React, { useContext, useState } from "react";
import { Modal, Button, TextInput, Group, Box, Textarea, RadioGroup, Radio, Title, Divider } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import BlogContext from "../../contexts/BlogContext";
import App from "./FileUpload";
// import { DropzoneButton } from "./Dropzone";
import { useForm } from "@mantine/form";

const EditBlog = ({ blog }) => {
	const [opened, setOpened] = useState(false);
	const { updateBlog } = useContext(BlogContext);

	// Form initial state
	let form1 = useForm({
		initialValues: {
			id: blog._id,
			title: blog.title,
			tags: blog.tags,
			description: blog.description,
			details: blog.details,
			gender: blog.gender,
			date: new Date(blog.date),
			time: new Date(blog.date),
			trainer: blog.trainer,
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
				transitionDuration={600}
			>
				<div
					style={{
						backgroundColor: "",
						margin: "-40px",
						borderRadius: "53px",
						border: "3px solid #ccc",
						width: "548px",
					}}
				>
					<Box
						sx={(theme) => ({
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
							textAlign: "left",
							padding: theme.spacing.xl,
							borderRadius: theme.radius.md,
							width: "500px",
							cursor: "pointer",
							borderRadius: "50px",
							boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
							value: "dfdfdfdfdf",

							"&:hover": {
								backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
							},
						})}
					>
						<Title align="center" order={1}>
							Update The Event
						</Title>
						<Divider my="sm" size={"md"} />
						<form
							onSubmit={form1.onSubmit((values) => {
								updateBlog(values);
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
									<App />
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
									<Radio value="Dogs" label="Only for Dogs" />
									<Radio value="Cats" label="Only for Cats" />
									<Radio value="Both" label="Both" />
								</RadioGroup>
							</Group>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "30px" }}
								{...form1.getInputProps("details")}
							/>
							<Divider my="sm" size={"md"} />
							<Group spacing={"150px"} style={{ marginTop: "15px" }} position="center" mt="md">
								<Button color={"blue[4]"} type="submit" radius="10px" size="xl" compact>
									Submit
								</Button>
								<Button onClick={() => setOpened(false)} color={"red"} type="button" radius="10px" size="xl" compact>
									Cancel
								</Button>
							</Group>
							{/* <DropzoneButton /> */}
							<TextInput
								size="xs"
								required
								label="debug trainer id"
								placeholder="Event trainer"
								{...form1.getInputProps("trainer")}
							/>
						</form>
					</Box>
				</div>
			</Modal>
			<Group position="center">
				<Button size="md" onClick={() => setOpened(true)} compact variant="light" color="blue">
					Update
				</Button>
			</Group>
		</>
	);
};

export default EditBlog;