import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";

const EditRequest = () => {
	const { editRequest, requests, setEditOpened } = useContext(PersonalTrainerRequestContext);

	// Form initial state
	let form = useForm({
		initialValues: {
			id: requests._id,
			name: requests.name,
			perTrainer: requests.perTrainer,
			timeSlot: requests.timeSlot,
			TrainDay: requests.TrainDay,
			package: requests.package,
			status: requests.status,
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
					<TextInput required name="status" label="Status" {...form.getInputProps("status")} />

					<Group position="right" mt="md">
						<Button
							type="submit"
							onClick={() => {
								setEditOpened(false);
							}}
						>
							Update
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditRequest;
