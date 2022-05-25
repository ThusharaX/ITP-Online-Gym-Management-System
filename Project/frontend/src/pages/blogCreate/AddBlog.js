import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Select, Stepper } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
import { UserCheck, ShieldCheck, MailOpened } from "tabler-icons-react";

import BlogContext from "../../contexts/BlogContext";

const AddBlog = () => {
	const { addBlog, form, setOpened, fillWithDummyData } = useContext(BlogContext);

	const [active, setActive] = useState(1);
	const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<>
			<Box sx={{ maxWidth: 550 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addBlog(values))}>
					<Stepper active={active} onStepClick={setActive} breakpoint="sm">
						<Stepper.Step
							icon={<UserCheck size={18} />}
							label="Fist step"
							description="Create an account"
							allowStepSelect={active > 0}
						>
							<TextInput required name="trname" label="Trainer Name" {...form.getInputProps("trname")} />
							<TextInput required name="title" label="Title" {...form.getInputProps("title")} />
							<TextInput required name="description" label="Description" {...form.getInputProps("description")} />
						</Stepper.Step>
						<Stepper.Step
							label="Second step"
							icon={<MailOpened size={18} />}
							description="Verify email"
							allowStepSelect={active > 1}
						>
							<TextInput required name="email" label="Email" {...form.getInputProps("email")} />
						</Stepper.Step>
						<Stepper.Step
							icon={<ShieldCheck size={18} />}
							label="Final step"
							description="Get full access"
							allowStepSelect={active > 2}
						>
							<Select
								label="Monday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("monday")}
							/>
							<Select
								label="Tuesday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("tuesday")}
							/>
							<Select
								label="wednesday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("wednesday")}
							/>
							<Select
								label="Thursday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("thursday")}
							/>
							<Select
								label="Friday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("friday")}
							/>
							<Select
								label="Saturday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("saturday")}
							/>
							<Select
								label="Sunday"
								placeholder="Pick one"
								data={[
									{ value: "Available", label: "Available", group: "Used to be a pickle" },
									{ value: "Not Available", label: "Not Available", group: "Used to be a pickle" },
								]}
								mt="sm"
								{...form.getInputProps("sunday")}
							/>
						</Stepper.Step>
						<Stepper.Completed>
							<TextInput required name="fb" label="Facebook" {...form.getInputProps("fb")} />
							<TextInput required name="wNum" label="Phone Number" {...form.getInputProps("wNum")} />
							<br />
							<Group position="center">
								<Button
									variant="outline"
									type="submit"
									onClick={() => {
										setOpened(false);
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
												title: "Data was successfully added!!!",
												message: "Notification will close in 2 seconds, you can close this notification now",
												icon: <CheckIcon />,
												autoClose: 2000,
											});
										}, 3000);
									}}
								>
									Create New Blog
								</Button>
								<Button onClick={() => fillWithDummyData()} color="green">
									Demo
								</Button>
							</Group>
						</Stepper.Completed>
					</Stepper>
					<Group position="center" mt="xl">
						<Button variant="default" onClick={prevStep}>
							Back
						</Button>
						<Button onClick={nextStep}>Next step</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddBlog;
