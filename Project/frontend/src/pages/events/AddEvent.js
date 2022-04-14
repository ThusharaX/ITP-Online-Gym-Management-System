import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Textarea, RadioGroup, Radio, Title, Divider } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import EventContext from "../../contexts/EventContext";

const AddEvent = () => {
	const { addEvent, form } = useContext(EventContext);

	return (
		<>
			<Box
				sx={(theme) => ({
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
					textAlign: "center",
					padding: theme.spacing.xl,
					borderRadius: theme.radius.md,
					width: "500px",
					cursor: "pointer",
					borderRadius: "50px",
					boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",

					"&:hover": {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
					},
				})}
			>
				<Title order={1}>Add an Event</Title>
				<Divider my="sm" size={"md"} />
				<form onSubmit={form.onSubmit((values) => addEvent(values))}>
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
					<Group spacing={80} position="center" style={{ marginTop: "40px" }}>
						<DatePicker
							size="md"
							placeholder="Select date"
							label="Select Date"
							required
							{...form.getInputProps("date")}
						/>
						<RadioGroup
							size="md"
							orientation="vertical"
							label="Can Join"
							color="gray"
							required
							{...form.getInputProps("gender")}
						>
							<Radio value="Dogs" label="Only for Dogs" />
							<Radio value="Cats" label="Only for Cats" />
							<Radio value="Both" label="Both" />
						</RadioGroup>
					</Group>

					<TextInput
						boxShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
						size="md"
						width={500}
						required
						label="Details"
						placeholder="Enter Details"
						style={{ marginTop: "30px", marginBottom: "30px" }}
						{...form.getInputProps("details")}
					/>
					<Divider my="sm" size={"md"} />
					<Group style={{ marginTop: "4px" }} position="center" mt="md">
						<Button color={"gray"} type="submit" radius="40px" size="xl" compact>
							Submit
						</Button>
					</Group>

					{/* <TextInput required label="debug trainer id" placeholder="Event trainer" {...form.getInputProps("trainer")} /> */}
				</form>
			</Box>
		</>
	);
};

export default AddEvent;
