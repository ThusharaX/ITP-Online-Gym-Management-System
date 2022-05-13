import React, { useContext } from "react";
import { Button, TextInput, Group, Box, NumberInput, Select, Container, Card } from "@mantine/core";
import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import { showNotification, updateNotification } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
import "./sty.css";

const AddPersonalTrainerRequest = () => {
	const { addRequest, form } = useContext(PersonalTrainerRequestContext);

	return (
		<>
			<Box>
				<Container size="xs" px="xs" className="content">
					<Card shadow="sm" p="xl" component="a" target="_blank">
						{/* <Box sx={{ maxWidth: 300 }} mx="auto"> */}

						<h1 style={{ textAlign: "center" }}>Create Personal Trainer Request</h1>

						<form onSubmit={form.onSubmit((values) => addRequest(values))}>
							<TextInput required label="Name" placeholder="Enter Name" mt="sm" {...form.getInputProps("name")} />

							{/* <TextInput
								required
								label="Personal Trainer"
								placeholder="Enter Your Personal Trainer"
								mt="sm"
								{...form.getInputProps("perTrainer")}
							/> */}

							<Select
								required
								label="Select Personal Trainer"
								placeholder="Pick one"
								data={[
									{
										value: "Mery Andrew",
										label: "Mery Andrew",
										group: "Most Famous Personal Trainer In Last Year",
									},
									{
										value: "James Smith",
										label: "James Smith",
										group: "Others",
									},
									{ value: "Jarrey Macrew", label: "Jarrey Macrew", group: "Others" },
								]}
								mt="sm"
								{...form.getInputProps("perTrainer")}
							/>

							{/* <NumberInput required label="Time Slot" placeholder="Time Slot" mt="sm" {...form.getInputProps("timeSlot")} /> */}

							<Select
								label="Time Slot"
								placeholder="Pick one"
								data={[
									{ value: "7.00 a.m - 10.00 a.m", label: "7.00 a.m - 10.00 a.m", group: "Used to be a pickle" },
									{ value: "10.00 a.m - 13.00p.m", label: "10.00 a.m - 13.00p.m", group: "Never was a pickle" },
									{ value: "13.00 p.m - 15.00 p.m", label: "13.00 p.m - 15.00 p.m", group: "Never was a pickle" },
									{
										value: "15.00 p.m -18.00 p.m",
										label: "15.00 p.m -18.00 p.m",
										group: "Never was a pickle",
									},
								]}
								mt="sm"
								{...form.getInputProps("timeSlot")}
							/>

							<TextInput required label="Train Day" type="date" {...form.getInputProps("TrainDay")} />

							{/* <TextInput required placeholder="Package" label="Package" mt="sm" {...form.getInputProps("package")} /> */}

							<Select
								required
								label="Select Package"
								placeholder="Pick one"
								data={[
									{
										value: "30 Day Intitiator Package",
										label: "30 Day Intitiator Package",
										group: "Most Famous Package In This Year",
									},
									{
										value: "90 Day Mass Gainer Package",
										label: "90 Day Mass Gainer Package",
										group: "Another Packages",
									},
									{ value: "90 Day Shred Package", label: "90 Day Shred Package", group: "Another Packages" },
								]}
								mt="sm"
								{...form.getInputProps("package")}
							/>

							{/* <TextInput required label="Status" mt="sm" {...form.getInputProps("status")} /> */}

							<Select
								label="Select Status"
								placeholder="Pick one"
								data={[{ value: "Pending", label: "Pending" }]}
								mt="sm"
								{...form.getInputProps("status")}
							/>

							<br />

							{/* <Group position="center" mt="xl">
								<Button type="submit">Create Request</Button>
							</Group> */}

							<Group position="center">
								<Button
									type="submit"
									variant="outline"
									onClick={() => {
										showNotification({
											id: "load-data",
											loading: true,
											title: "Loading your data",
											message: "Data will be loaded in 3 seconds, you cannot close this yet",
											autoClose: false,
											disallowClose: true,
										});

										setTimeout(() => {
											updateNotification({
												id: "load-data",
												color: "teal",
												title: "Data was loaded",
												message: "Notification will close in 2 seconds, you can close this notification now",
												icon: <CheckIcon />,
												autoClose: 2000,
											});
										}, 3000);
									}}
								>
									Create Request
								</Button>
							</Group>
						</form>
					</Card>
				</Container>
			</Box>
		</>
	);
};

export default AddPersonalTrainerRequest;
