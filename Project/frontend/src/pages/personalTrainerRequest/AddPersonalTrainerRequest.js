import React, { useContext, useState, useRef } from "react";
import { Button, TextInput, Group, Box, Select, Container, Card, Stepper } from "@mantine/core";
import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import { showNotification, updateNotification } from "@mantine/notifications";
import { UserCheck, ShieldCheck, CircleCheck } from "tabler-icons-react";
import { CheckIcon } from "@modulz/radix-icons";
import "./sty.css";

const AddPersonalTrainerRequest = () => {
	const { addRequest, form } = useContext(PersonalTrainerRequestContext);

	const [active, setActive] = useState(1);
	const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<>
			<Box>
				<Container size="xs" px="xs" className="contentTrainer">
					<Card shadow="xl" p="xl" component="a" target="_blank">
						<h1 style={{ textAlign: "center" }}>Create Personal Trainer Request</h1>

						<form onSubmit={form.onSubmit((values) => addRequest(values))}>
							{/* <Stepper active={active} onStepClick={setActive} breakpoint="sm">
								<Stepper.Step
									icon={<UserCheck size={18} />}
									label="Fist step"
									description="Create an account"
									allowStepSelect={active > 0}
								> */}
							<TextInput required label="Name" placeholder="Enter Name" mt="sm" {...form.getInputProps("name")} />

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
							{/* </Stepper.Step>
								<Stepper.Step
									label="Second step"
									icon={<CircleCheck size={18} />}
									description="Verify email"
									allowStepSelect={active > 1}
								> */}
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
							{/* </Stepper.Step>
								<Stepper.Step
									icon={<ShieldCheck size={18} />}
									label="Final step"
									description="Get full access"
									allowStepSelect={active > 2}
								> */}
							<Select
								label="Select Status"
								placeholder="Pick one"
								data={[{ value: "Pending", label: "Pending" }]}
								mt="sm"
								{...form.getInputProps("status")}
							/>

							<br />
							{/* </Stepper.Step>
								<Stepper.Completed> */}
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
							{/* </Stepper.Completed>
							</Stepper> */}
							{/* <Group position="center" mt="xl">
								<Button variant="default" onClick={prevStep}>
									Back
								</Button>
								<Button onClick={nextStep}>Next step</Button>
							</Group> */}
						</form>
					</Card>
				</Container>
			</Box>
		</>
	);
};

export default AddPersonalTrainerRequest;
