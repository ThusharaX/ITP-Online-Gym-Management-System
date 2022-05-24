import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, useMantineTheme, Button, TextInput, Group, Box, Image, Title, Divider } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import MemberContext from "../../contexts/MemberContext";

const Profile = () => {
	const theme = useMantineTheme();
	const bg = theme.colorScheme === "dark" ? "#222" : "#ddd";

	const navigate = useNavigate();
	const TitleColor = theme.colorScheme === "dark" ? "#ddd" : "#222";
	const textstyle = (theme) => ({ fontSize: "15px", marginTop: "20px", fontWeight: "400", color: TitleColor });

	const { editMember, member, setEditOpened, formProfile } = useContext(MemberContext);
	const [date, setDate] = useState(new Date());

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
				marginTop: "-130px",
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
						height: "900px",
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
							src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
							alt="Random unsplash image"
						/>
					</Group>
					<Title sx={(theme) => ({ color: TitleColor, marginTop: "20px" })} order={2}>
						{member.firstName} {member.lastName}
					</Title>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "10px" }} weight={500}>
						@{member.username}{" "}
					</Text>
					<Text sx={(theme) => ({ color: TitleColor })} style={{ marginTop: "30px" }}>
						About
					</Text>
					<Divider my="sm" size={"md"} />
					<Text sx={textstyle}>Email: {member.email}</Text>
					<Text sx={textstyle}>PhoneNumber: {member.phoneNumber}</Text>
					<Text sx={textstyle}>NIC: {member.nic}</Text>
					<Text sx={textstyle}>{Date(member.dob).toString().slice(3, 15)}</Text>
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
						height: "900px",
						borderRadius: "50px",
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
					<form
						onSubmit={formProfile.onSubmit((values) => {
							editMember(values);
							setEditOpened(false);
						})}
					>
						<Group position="center" style={{ marginTop: "20px" }}>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="FIRST NAME"
								placeholder="Enter Employee's First Name"
								{...formProfile.getInputProps("firstName")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="LAST NAME"
								placeholder="Enter Employee's First Name"
								{...formProfile.getInputProps("lastName")}
							/>
						</Group>
						<Group position="center" style={{ marginTop: "20px" }}>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="User NAME"
								placeholder="Enter Employee's User Name"
								{...formProfile.getInputProps("username")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="NIC"
								placeholder="Enter Employee's  NIC"
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

							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="PHONE NUMBER"
								placeholder="Enter Employee's Phone Number"
								{...formProfile.getInputProps("phoneNumber")}
							/>
						</Group>

						<TextInput
							size="md"
							width={500}
							required
							label="Email"
							placeholder="Enter Employee's Email"
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
