import React, { useContext } from "react";
import { Button, TextInput, Group, Box, NumberInput } from "@mantine/core";
import BlogContext from "../../contexts/BlogContext";

const AddBlog = () => {
	const { AddBlog, form } = useContext(BlogContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => AddBlog(values))}>
					<TextInput required label="Trainer Name" placeholder="Enter Name" mt="sm" {...form.getInputProps("trname")} />

					<TextInput required label="Title" placeholder="Enter Your Age" mt="sm" {...form.getInputProps("title")} />

					<TextInput
						required
						label="Description"
						placeholder="Enter Your Age"
						mt="sm"
						{...form.getInputProps("description")}
					/>
					<TextInput required label="Facebook" placeholder="Enter Your Age" mt="sm" {...form.getInputProps("fb")} />
					<TextInput
						required
						label="Phone Number"
						placeholder="Male or Female"
						mt="sm"
						{...form.getInputProps("wNum")}
					/>

					<TextInput required label="Email" placeholder="example@mail.com" {...form.getInputProps("email")} />

					<Group position="center" mt="xl">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddBlog;

// import React, { useContext, useState } from "react";
// import { Modal, Button, TextInput, Group, Box, Textarea, RadioGroup, Radio, Title, Divider } from "@mantine/core";
// import { DatePicker, TimeInput } from "@mantine/dates";
// import BlogContext from "../../contexts/BlogContext";
// import App from "./FileUpload";

// // import { DropzoneButton } from "./Dropzone";

// const addBlog = () => {
// 	const { addBlog } = useContext(BlogContext);
// 	const [opened, setOpened] = useState(false);
// 	const [value, onChange] = useState(new Date());
// 	const [value1, onChange1] = useState(new Date());
// 	return (
// 		<>
// 			<Modal
// 				opened={opened}
// 				onClose={() => setOpened(false)}
// 				withCloseButton={false}
// 				transition="fade"
// 				transitionDuration={600}
// 			>
// 				<Box
// 					sx={(theme) => ({
// 						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
// 						textAlign: "left",
// 						margin: "-40px",
// 						padding: theme.spacing.xl,
// 						borderRadius: theme.radius.md,
// 						width: "500px",
// 						cursor: "pointer",
// 						borderRadius: "50px",
// 						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",

// 						"&:hover": {
// 							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
// 						},
// 					})}
// 				>
// 					<Title align="center" order={1}>
// 						Add Blog
// 					</Title>
// 					<Divider my="sm" size={"md"} />

// 					<form
// 						onSubmit={form.onSubmit((values) => {
// 							addBlog(values);
// 							form.reset();
// 							setOpened(false);
// 						})}
// 					>
// 						<Group position="center" style={{ marginTop: "20px" }}>
// 							<TextInput
// 								size="md"
// 								style={{ width: "48%" }}
// 								required
// 								label="Title"
// 								placeholder="Enter Title"
// 								{...form.getInputProps("title")}
// 							/>
// 							<TextInput
// 								size="md"
// 								style={{ width: "48%" }}
// 								required
// 								label="Tags"
// 								placeholder="Enter Tags"
// 								{...form.getInputProps("tags")}
// 							/>
// 						</Group>
// 						<Textarea
// 							size="md"
// 							required
// 							label="Description"
// 							placeholder="Event Description"
// 							{...form.getInputProps("description")}
// 							autosize
// 							minRows={1}
// 							maxRows={10}
// 							style={{ marginTop: "35px" }}
// 						/>
// 						<Group spacing={40} position="left" style={{ marginTop: "40px" }}>
// 							<DatePicker
// 								size="md"
// 								placeholder="Select date"
// 								label="Select Date"
// 								required
// 								value={value}
// 								onChange={onChange}
// 								{...form.getInputProps("date")}
// 							/>
// 							<TimeInput
// 								size="md"
// 								label="Select Time"
// 								value={value1}
// 								onChange={onChange1}
// 								required
// 								{...form.getInputProps("time")}
// 							/>
// 						</Group>
// 						<Group spacing={5} position="left" style={{ marginTop: "40px" }}>
// 							<div style={{ height: "120px", maxWidth: "340px", backgroundColor: "" }}>
// 								<App />
// 							</div>
// 							<RadioGroup
// 								style={{ border: " 1px solid #ddd", padding: "7px", borderRadius: "5px" }}
// 								size="md"
// 								orientation="vertical"
// 								label="Can Join"
// 								color="gray"
// 								required
// 								{...form.getInputProps("gender")}
// 							>
// 								<Radio value="Dogs" label="Only for Dogs" />
// 								<Radio value="Cats" label="Only for Cats" />
// 								<Radio value="Both" label="Both" />
// 							</RadioGroup>
// 						</Group>
// 						<TextInput
// 							size="md"
// 							width={500}
// 							required
// 							label="Details"
// 							placeholder="Enter Details"
// 							style={{ marginTop: "30px", marginBottom: "30px" }}
// 							{...form.getInputProps("details")}
// 						/>
// 						<Divider my="sm" size={"md"} />
// 						<Group style={{ marginTop: "15px" }} position="center" mt="md">
// 							<Button color={"blue[4]"} type="submit" radius="20px" size="xl" compact>
// 								Submit
// 							</Button>
// 						</Group>
// 						{/* <DropzoneButton /> */}
// 					</form>
// 				</Box>
// 			</Modal>
// 			<Group position="center">
// 				<Button onClick={() => setOpened(true)}>Add Event</Button>
// 			</Group>
// 		</>
// 	);
// };

// export default addBlog;
