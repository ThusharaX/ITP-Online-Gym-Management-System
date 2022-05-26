import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Autocomplete } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";

import WorkoutScRContext from "../../contexts/WorkoutScRContext";

const EditWorkoutScR = () => {
	const { editWorkoutScR, setEditOpened, WorkoutScR } = useContext(WorkoutScRContext);

	let form = useForm({
		initialValues: {
			id: WorkoutScR._id,
			name: WorkoutScR.name,
			age: WorkoutScR.age,
			gender: WorkoutScR.gender,
			email: WorkoutScR.email,
			requirment: WorkoutScR.requirment,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form
					onSubmit={form.onSubmit((values) => {
						editWorkoutScR(values);
					})}
				>
					<TextInput required label="Name" placeholder="Name" {...form.getInputProps("name")} />
					<TextInput required label="age" placeholder="Age" {...form.getInputProps("age")} />
					<TextInput required label="Gender" placeholder="Gender" {...form.getInputProps("gender")} />

					<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
					<TextInput required label="Requirement" placeholder="Requirement" {...form.getInputProps("requirement")} />
					<Group position="right" mt="md">
						<Button type="submit">Update</Button>
						<Button onClick={() => setEditOpened(false)} color="red">
							Cancel
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditWorkoutScR;
