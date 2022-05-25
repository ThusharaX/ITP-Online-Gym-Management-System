import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
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
	Paper,
	Collapse,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import TrainerContext from "../../contexts/TrainerContext";

const Profile = () => {
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
	const textstyle = (theme) => ({ fontSize: "15px", marginTop: "20px", fontWeight: "400", color: TitleColor });

	const { updateTrainer, formProfile, trainer, date, setDate, TrainerAPI, setTrainer } = useContext(TrainerContext);

	const [opened, setOpen] = useState(false);
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
					formProfile.setFieldValue("avatar", downloadURL);
				});
			}
		);
	};

	useEffect(() => {
		TrainerAPI.getTrainerData(localStorage.getItem("uID")).then((res) => {
			setTrainer(res.data);
			formProfile.setFieldValue("avatar", res.data.firstName);
			formProfile.setFieldValue("firstName", res.data.firstName);
			formProfile.setFieldValue("lastName", res.data.lastName);
			formProfile.setFieldValue("username", res.data.username);
			formProfile.setFieldValue("nic", res.data.nic);
			formProfile.setFieldValue("email", res.data.email);
			formProfile.setFieldValue("gender", res.data.gender);
			formProfile.setFieldValue("address", res.data.address);
			formProfile.setFieldValue("phoneNumber", res.data.phoneNumber);
			formProfile.setFieldValue("qualifications", res.data.qualifications);
			formProfile.setFieldValue("dob", res.data.dob);
			setDate(res.data.dob);
		});
	}, []);
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				backgroundImage: gradient + "url(https://wallpapercave.com/wp/wp6714633.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
				marginTop: "-100px",
				marginBottom: "-130px",
				// width: "100%",
				padding: "150px 0px",
			})}
		>
			<Group position="center" spacing={20} style={{}}>
				<Box
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						border: "1px solid",
						borderColor: theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4],
						boxShadow: theme.colorScheme === "dark" ? "3px 3px 25px  #444" : "5px 5px 25px #aaa",
						textAlign: "center",
						padding: theme.spacing.md,
						borderRadius: theme.radius.md,
						width: "300px",
						height: "840px",
						borderRadius: "50px",
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
							src={trainer.avatar}
							onClick={() => setOpen((o) => !o)}
						/>
					</Group>
					<Collapse in={opened}>
						<Paper shadow="xs" p="md" style={{ marginTop: "10px" }}>
							<input form="saveImg" type="file" required />
							<Button color={"gray"} form="saveImg" type="submit" compact>
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
									style={{ marginRight: "30px", margin: "10px 0px 0px 2px", backgroundPosition: "10px" }}
									src={imgUrl}
									alt="uploaded file"
									height={160}
								/>
							)}
						</Paper>
					</Collapse>
					<form id="saveImg" onSubmit={handleSubmit} className="form"></form>
					<Title sx={(theme) => ({ color: TitleColor, marginTop: "20px" })} order={2}>
						{trainer.firstName} {trainer.lastName}
					</Title>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "10px" }} weight={500}>
						@{trainer.username}{" "}
					</Text>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "30px" }}>
						About
					</Text>
					<Divider my="sm" size={"md"} />
					<Text sx={(theme) => ({ color: TitleColor, marginTop: "10px" })}>Gender: {trainer.gender}</Text>
					<Text sx={textstyle}>Email: {trainer.email}</Text>
					<Text sx={textstyle}>PhoneNumber: {trainer.phoneNumber}</Text>
					<Text sx={textstyle}> Address: {trainer.address}</Text>
					<Text sx={textstyle}>NIC: {trainer.nic}</Text>
					<Text sx={textstyle}>Qualifications: {trainer.qualifications.join(", ")}</Text>
					<Text sx={textstyle}>{Date(trainer.dob).toString().slice(3, 15)}</Text>
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
						height: "840px",
						borderRadius: "50px",
						opacity: 0.9,
						"&:hover": {
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
						},
					})}
				>
					<Title order={1} align="center" sx={(theme) => ({ color: TitleColor })}>
						Main Details
					</Title>

					<Divider my="sm" size={"md"} />
					<form
						onSubmit={formProfile.onSubmit((values) => {
							updateTrainer(values);
							setImgUrl(null);
						})}
					>
						<Group position="center" style={{ marginTop: "40px" }}>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="FIRST NAME"
								placeholder="Enter Trainer's First Name"
								{...formProfile.getInputProps("firstName")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="LAST NAME"
								placeholder="Enter Trainer's First Name"
								{...formProfile.getInputProps("lastName")}
							/>
						</Group>
						<Group position="center" style={{ marginTop: "20px" }}>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="User NAME"
								placeholder="Enter Trainer's User Name"
								{...formProfile.getInputProps("username")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="NIC"
								placeholder="Enter Trainer's  NIC"
								{...formProfile.getInputProps("nic")}
							/>
						</Group>

						<Group spacing={40} position="left" style={{ marginTop: "40px" }}>
							<DatePicker
								size="md"
								placeholder="Date of Birth"
								label="Date of Birth"
								required
								value={date}
								onChange={setDate}
								{...formProfile.getInputProps("dob")}
							/>
							<RadioGroup
								style={{ border: " 1px solid #ddd", padding: "7px", borderRadius: "5px" }}
								size="md"
								orientation="horizontal"
								label="Can Join"
								color="gray"
								required
								{...formProfile.getInputProps("gender")}
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
								{...formProfile.getInputProps("address")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="PHONE NUMBER"
								placeholder="Enter Trainer's Phone Number"
								{...formProfile.getInputProps("phoneNumber")}
							/>
						</Group>

						<TextInput
							size="md"
							width={500}
							required
							label="QUALIFICATION"
							placeholder="Enter Trainer's Qualification"
							style={{ marginTop: "30px", marginBottom: "30px" }}
							{...formProfile.getInputProps("qualifications")}
						/>

						<TextInput
							size="md"
							width={500}
							required
							label="Email"
							placeholder="Enter Trainer's Email"
							style={{ marginTop: "30px", marginBottom: "30px" }}
							{...formProfile.getInputProps("email")}
						/>

						<Divider my="sm" size={"md"} style={{ marginTop: "20px" }} />
						<Group style={{ marginTop: "20px" }} position="center" mt="md">
							<Button color={"cyan"} size="xl" type="submit" compact>
								Update
							</Button>
						</Group>
					</form>
				</Box>
			</Group>
		</Box>
	);
};

export default Profile;
