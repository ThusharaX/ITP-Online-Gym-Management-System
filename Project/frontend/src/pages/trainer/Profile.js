import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Text,
	useMantineTheme,
	Button,
	TextInput,
	Group,
	Box,
	Image,
	RadioGroup,
	Radio,
	Title,
	Divider,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import TrainerContext from "../../contexts/TrainerContext";
// import dropzoneChildren from "./Dropzone.tsx";
import { DropzoneButton } from "./Dropzone";

const AddTrainer = () => {
	const theme = useMantineTheme();
	const gradient =
		theme.colorScheme === "dark"
			? "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)), "
			: "linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.8)), ";
	const bg = theme.colorScheme === "dark" ? "#222" : "#ddd";

	let cardTheme = (theme) => ({
		backgroundImage: gradient + "url(https://images.alphacoders.com/692/692039.jpg)",
	});
	const navigate = useNavigate();

	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";
	const { addTrainer, form } = useContext(TrainerContext);
	const [value, onChange] = useState(new Date());
	const form1 = {
		firstName: "first name",
		lastName: "last name",
		userName: "user_name",
		nic: "09612490852",
		email: "train@gmail.com",
		dob: new Date(),
		gender: "Female",
		address: "address1Malabbe",
		phoneNumber: "0123456789",
		qualifications: ["css", "javascript", "mongoose", "node"],
	};
	const textstyle = (theme) => ({ fontSize: "15px", marginTop: "20px", fontWeight: "400", color: TitleColor });
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://images.alphacoders.com/692/692039.jpg)",
				marginTop: "-130px",
				marginBottom: "-130px",
				// width: "100%",
				padding: "150px 0px",
			})}
		>
			<Group position="left" spacing={0}>
				<Box
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						border: "1px solid",
						borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
						boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
						textAlign: "center",
						padding: theme.spacing.xl,
						borderRadius: theme.radius.md,
						width: "300px",
						height: "1040px",
						borderRadius: "50px",
						margin: "0px auto",
						paddingTop: "30px",
						opacity: 0.9,
					})}
				>
					<Group position="center">
						<Image
							radius="200px"
							width={150}
							height={150}
							style={{ boxShadow: "5px 5px 20px #aaa ", borderRadius: "200px" }}
							src="http://cdn2.peopleimages.com/picture/1301022-hes-always-in-the-gym-fit_400_400.jpg"
							alt="Random unsplash image"
						/>
					</Group>
					<Title sx={(theme) => ({ color: TitleColor, marginTop: "20px" })} order={2}>
						{form1.firstName} {form1.lastName}
					</Title>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "10px" }} weight={500}>
						@{form1.userName}{" "}
					</Text>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "30px" }}>
						About
					</Text>
					<Divider my="sm" size={"md"} />
					<Text sx={(theme) => ({ color: TitleColor, marginTop: "10px" })}>Gender: {form1.gender}</Text>
					<Text sx={textstyle}>Email: {form1.email}</Text>
					<Text sx={textstyle}>PhoneNumber: {form1.phoneNumber}</Text>
					<Text sx={textstyle}> Address: {form1.address}</Text>
					<Text sx={textstyle}>NIC: {form1.nic}</Text>
					<Text sx={textstyle}>Qualifications: {form1.qualifications.join(", ")}</Text>
					{/* <Text>{form1.dob}</Text> */}
				</Box>
				<Box
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						border: "1px solid",
						borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
						boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
						textAlign: "left",
						padding: theme.spacing.xl,
						borderRadius: theme.radius.md,
						width: "600px",
						height: "1040px",
						cursor: "pointer",
						borderRadius: "50px",
						margin: "10px auto",
						marginLeft: "-480px",
						opacity: 0.9,
						"&:hover": {
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
						},
					})}
				>
					<Title order={3} align="center" sx={(theme) => ({ color: TitleColor })}>
						Main Details
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
								label="User NAME"
								placeholder="Enter Trainer's User Name"
								{...form.getInputProps("userName")}
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

						<Divider my="sm" size={"md"} style={{ marginTop: "20px" }} />
						<Group style={{ marginTop: "20px" }} position="center" mt="md">
							<Button color={"cyan"} type="submit" radius="4px" size="xl" compact>
								Update
							</Button>
						</Group>
					</form>
				</Box>
			</Group>
		</Box>
	);
};

export default AddTrainer;
