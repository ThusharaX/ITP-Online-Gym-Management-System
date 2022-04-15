import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, PasswordInput, RadioGroup, Radio, Title, Divider } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import TrainerContext from "../../contexts/TrainerContext";
import { PasswordStrength } from "./pswBtn.tsx";
// import dropzoneChildren from "./Dropzone.tsx";
import { DropzoneButton } from "./Dropzone.tsx";

const AddTrainer = () => {
	const { addTrainer, form } = useContext(TrainerContext);
	const [value, onChange] = useState(new Date());
	// eslint-disable-next-line no-console
	console.log("dddd");
	return (
		<>
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

					"&:hover": {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
					},
				})}
			>
				<Title align="center" order={1}>
					TRAINER REGISTRATION
				</Title>

				<Divider my="sm" size={"md"} />
				<form onSubmit={form.onSubmit((values) => addTrainer(values))}>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="FIRST NAME"
							placeholder="Enter Trainer's First Name"
							{...form.getInputProps("title")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="LAST NAME"
							placeholder="Enter Trainer's First Name"
							{...form.getInputProps("tags")}
						/>
					</Group>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="LAST NAME"
							placeholder="Enter Trainer's User Name"
							{...form.getInputProps("title")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="NIC"
							placeholder="Enter Trainer's  NIC"
							{...form.getInputProps("tags")}
						/>
					</Group>

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
						<RadioGroup
							style={{ border: " 1px solid #ddd", padding: "7px", borderRadius: "5px" }}
							size="md"
							orientation="horizontal"
							label="Can Join"
							color="gray"
							required
							{...form.getInputProps("gender")}
						>
							<Radio value="male" label="Male" />
							<Radio value="female" label="Female" />
						</RadioGroup>
					</Group>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="ADDRESS"
							placeholder="Enter Trainer's Address"
							{...form.getInputProps("title")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="PHONE NUMBER"
							placeholder="Enter Trainer's Phone Number"
							{...form.getInputProps("tags")}
						/>
					</Group>

					<TextInput
						size="md"
						width={500}
						required
						label="QUALIFICATION"
						placeholder="Enter Trainer's Qualification"
						style={{ marginTop: "30px", marginBottom: "30px" }}
						{...form.getInputProps("details")}
					/>
					<DropzoneButton />
					<Group position="center" style={{ marginTop: "20px" }}>
						<PasswordStrength />
						<PasswordInput
							size="md"
							style={{ width: "48%" }}
							required
							label="CONFIRM PASSWORD"
							placeholder="Confirm Password"
							{...form.getInputProps("tags")}
						/>
					</Group>
					<Divider my="sm" size={"md"} />
					<Group style={{ marginTop: "15px" }} position="center" mt="md">
						<Button color={"blue[4]"} type="submit" radius="20px" size="xl" compact>
							REGISTER
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddTrainer;
