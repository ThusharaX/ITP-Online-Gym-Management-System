import React, { useContext, useState } from "react";
import { Modal, Button, TextInput, Group, Box, Textarea, RadioGroup, Radio, Title, Divider } from "@mantine/core";
//import { DatePicker, TimeInput } from "@mantine/dates";
import SalaryContext from "../../contexts/SalaryContext";
//import App from "./FileUpload";
// import { DropzoneButton } from "./Dropzone";
import { useForm } from "@mantine/form";

const EditSalary = ({ salary }) => {
	const [opened, setOpened] = useState(false);
	const { updateSalary } = useContext(SalaryContext);

	// Form initial state
	let form1 = useForm({
		initialValues: {
			nic: salary.nic,
			year: salary.year,
			month: salary.month,
			basicSalary: salary.basicSalary,
			otHours: salary.otHours,
			otRate: salary.otRate,
			otTotal: salary.otTotal,
			totalSalary: salary.totalSalary,
		},
	});

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
								backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
							},
						})}
					>
						<Title align="center" order={1}>
							Update The Salary
						</Title>
						<Divider my="sm" size={"md"} />
						<form
							onSubmit={form1.onSubmit((values) => {
								updateSalary(values);
								form1.reset();
								setOpened(false);
							})}
						>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="Title"
								placeholder="Enter Title"
								{...form1.getInputProps("nic")}
							/>
							<TextInput
								size="md"
								style={{ width: "48%" }}
								required
								label="Tags"
								placeholder="Enter Tags"
								{...form1.getInputProps("year")}
							/>
							<Textarea
								size="md"
								required
								label="Description"
								placeholder="Event Description"
								{...form1.getInputProps("month")}
								autosize
								minRows={1}
								maxRows={10}
								style={{ marginTop: "35px" }}
							/>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("basicSalary")}
							/>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("otHours")}
							/>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("otRate")}
							/>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("otTotal")}
							/>
							<TextInput
								size="md"
								width={500}
								required
								label="Details"
								placeholder="Enter Details"
								style={{ marginTop: "30px", marginBottom: "20px" }}
								{...form1.getInputProps("totalSalary")}
							/>
							<Divider my="sm" size={"md"} />
							<Group spacing={"140px"} style={{ margin: "20px 0px 10px 0px" }} position="center" mt="md">
								<Button color={"blue[4]"} type="submit" radius="4px" size="xl" compact>
									Submit
								</Button>
								<Button onClick={() => setOpened(false)} color={"red"} type="button" radius="4px" size="xl" compact>
									Cancel
								</Button>
							</Group>
						</form>
					</Box>
				</div>
			</Modal>
			<Group position="center">
				<Button size="md" onClick={() => setOpened(true)} compact color="blue">
					Update
				</Button>
			</Group>
		</>
	);
};

export default EditSalary;
