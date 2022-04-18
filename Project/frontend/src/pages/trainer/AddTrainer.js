import React, { useContext, useState, useRef } from "react";
import {
	useMantineTheme,
	Button,
	TextInput,
	Group,
	Box,
	PasswordInput,
	RadioGroup,
	Radio,
	Title,
	Divider,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import TrainerContext from "../../contexts/TrainerContext";
import { PasswordStrength } from "./pswBtn";
// import dropzoneChildren from "./Dropzone.tsx";
import { DropzoneButton } from "./Dropzone";

const AddTrainer = () => {
	const theme = useMantineTheme();
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";
	const { addTrainer, form } = useContext(TrainerContext);
	const [value, onChange] = useState(new Date());

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],

				width: "100%",
				padding: "70px 0px",
			})}
		>
			<Box
				sx={(theme) => ({
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
					border: "1px solid",
					borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
					boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
					textAlign: "left",
					padding: theme.spacing.xl,
					borderRadius: theme.radius.md,
					width: "500px",
					cursor: "pointer",
					borderRadius: "50px",
					margin: "10px auto",

					"&:hover": {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
					},
				})}
			>
				<Title align="center" sx={(theme) => ({ color: TitleColor })}>
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
							size="sm"
							style={{ width: "48%" }}
							required
							label="CONFIRM PASSWORD"
							placeholder="Confirm Password"
							{...form.getInputProps("tags")}
						/>
					</Group>
					<Divider my="sm" size={"md"} style={{ marginTop: "20px" }} />
					<Group style={{ marginTop: "20px" }} position="center" mt="md">
						<Button color={"cyan"} type="submit" radius="4px" size="xl" compact>
							REGISTER
						</Button>
					</Group>
				</form>
			</Box>
		</Box>
	);
};

export default AddTrainer;
