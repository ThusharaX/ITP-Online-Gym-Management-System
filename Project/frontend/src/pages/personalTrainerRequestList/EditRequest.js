import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";

import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";

const EditRequest = () => {
	const { editRequest, request, setEditOpened } = useContext(PersonalTrainerRequestContext);

	// Form initial state
	let form = useForm({
		initialValues: {
			id: request._id,
			name: request.name,
			perTrainer: request.perTrainer,
			timeSlot: request.timeSlot,
			TrainDay: request.TrainDay,
			package: request.package,
			status: request.status,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => editRequest(values))}>
					<TextInput required name="name" label="Name" {...form.getInputProps("name")} />
					<TextInput required name="perTrainer" label="Personal Trainer " {...form.getInputProps("perTrainer")} />
					<TextInput required name="timeSlot" label="Time Slot" {...form.getInputProps("timeSlot")} />
					<TextInput required name="TrainDay" label="Train Day" {...form.getInputProps("TrainDay")} />
					<TextInput required name="package" label="Package" {...form.getInputProps("package")} />
					<Select
						label="Select Status"
						placeholder="Pick one"
						data={[
							{ value: "Pending", label: "Pending" },
							{ value: "Blocked", label: "Blocked" },
							{ value: "Active", label: "Active" },
						]}
						mt="sm"
						{...form.getInputProps("status")}
					/>

					{/* <Group position="right" mt="md">
						<Button
							type="submit"
							onClick={() => {
								setEditOpened(false);
							}}
						>
							Update
						</Button>
					</Group> */}
					<br />

					<Group position="center">
						<Button
							type="submit"
							variant="outline"
							onClick={() => {
								setEditOpened(false);
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
							Update Request
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditRequest;
