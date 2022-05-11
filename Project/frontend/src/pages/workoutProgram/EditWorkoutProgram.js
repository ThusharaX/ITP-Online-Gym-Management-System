import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Autocomplete } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

const EditWorkoutProgram = () => {
	const { editWorkoutProgram, setEditOpened, workoutProgram, schema, days } = useContext(WorkoutProgramContext);

	// Form initial state
	let form = useForm({
		// schema: joiResolver(schema),
		initialValues: {
			id: workoutProgram._id,
			photoURL: workoutProgram.photoURL,
			name: workoutProgram.name,
			description: workoutProgram.description,
			conducted_by: workoutProgram.conducted_by,
			fee: workoutProgram.fee,
			day: workoutProgram.day,
			time: workoutProgram.time,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form
					onSubmit={form.onSubmit((values) => {
						editWorkoutProgram(values);
						setEditOpened(false);
					})}
				>
					<TextInput required label="Image URL" placeholder="Enter Image URL" {...form.getInputProps("photoURL")} />
					<TextInput required label="Name" placeholder="Workout Program Name" {...form.getInputProps("name")} />
					<TextInput
						required
						label="Description"
						placeholder="Workout Program Description"
						{...form.getInputProps("description")}
					/>
					<TextInput
						required
						label="Conducted By"
						placeholder="Workout Program Conducted By"
						{...form.getInputProps("conducted_by")}
					/>
					<TextInput required label="Fee" placeholder="Workout Program Fee" {...form.getInputProps("fee")} />
					<Autocomplete
						required
						label="Day"
						placeholder="Workout Program Day"
						data={days}
						{...form.getInputProps("day")}
					/>
					<TextInput required label="Time" placeholder="Workout Program Time" {...form.getInputProps("time")} />

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

export default EditWorkoutProgram;
