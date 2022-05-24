import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Text,
	Anchor,
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
import { DropzoneButton } from "./Dropzone";

const AddTrainer = () => {
	const navigate = useNavigate();
	const theme = useMantineTheme();
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";
	const { addTrainer, form, isLoading } = useContext(TrainerContext);
	const [value, onChange] = useState(new Date());

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://images.alphacoders.com/692/692039.jpg)",
				marginTop: "-120px",
				marginBottom: "-120px",
				width: "100%",
				padding: "130px 0px",
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
					borderRadius: theme.radius.sm,
					width: "600px",
					cursor: "pointer",
					borderRadius: "50px",
					margin: "10px auto",
					opacity: "0.9",

					"&:hover": {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
					},
				})}
			>
				<Title align="center" sx={(theme) => ({ color: TitleColor })}>
					TRAINER REGISTRATION
				</Title>
				<Text color="dimmed" size="sm" align="center" mt={5}>
					Already have an account?{" "}
					<Anchor
						href="#"
						size="sm"
						onClick={() => {
							navigate("/trainers/login");
						}}
					>
						Login
					</Anchor>
				</Text>

				<Divider my="sm" size={"md"} />
				<form
					onSubmit={form.onSubmit((values) => {
						addTrainer(values);
						isLoading(true);
					})}
				>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="FIRST NAME"
							placeholder="Enter Trainer's First Name"
							{...form.getInputProps("firstName")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="LAST NAME"
							placeholder="Enter Trainer's First Name"
							{...form.getInputProps("lastName")}
						/>
					</Group>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="USER NAME"
							placeholder="Enter Trainer's User Name"
							{...form.getInputProps("username")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="NIC"
							placeholder="Enter Trainer's  NIC"
							{...form.getInputProps("nic")}
						/>
					</Group>

					<Group spacing={40} position="left" style={{ marginTop: "40px" }}>
						<DatePicker
							size="md"
							placeholder="Date of Birth"
							label="Date of Birth"
							required
							value={value}
							onChange={onChange}
							{...form.getInputProps("dob")}
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
							<Radio value="Male" label="Male" />
							<Radio value="Female" label="Female" />
						</RadioGroup>
					</Group>
					<Group position="center" style={{ marginTop: "20px" }}>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="ADDRESS"
							placeholder="Enter Trainer's Address"
							{...form.getInputProps("address")}
						/>
						<TextInput
							size="md"
							style={{ width: "48%" }}
							required
							label="PHONE NUMBER"
							placeholder="Enter Trainer's Phone Number"
							{...form.getInputProps("phoneNumber")}
						/>
					</Group>

					<TextInput
						size="md"
						width={500}
						required
						label="QUALIFICATION"
						placeholder="Enter Trainer's Qualification"
						style={{ marginTop: "30px", marginBottom: "30px" }}
						{...form.getInputProps("qualifications")}
					/>
					<TextInput
						size="md"
						width={500}
						required
						label="Email"
						placeholder="Enter Trainer's Email"
						style={{ marginTop: "30px", marginBottom: "30px" }}
						{...form.getInputProps("email")}
					/>
					<DropzoneButton />
					<Group position="center" style={{ marginTop: "20px" }}>
						{/* <PasswordStrength fm={form} /> */}
						<PasswordInput
							size="sm"
							required
							label="PASSWORD"
							style={{ width: "48%" }}
							placeholder="Your password"
							description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
							// value={value}
							// onChange={(event) => setValue(event.currentTarget.value)}
							{...form.getInputProps("psw")}
						/>
						<PasswordInput
							size="sm"
							style={{ width: "48%" }}
							required
							description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
							label="CONFIRM PASSWORD"
							placeholder="Confirm Password"
							{...form.getInputProps("rep_psw")}
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
