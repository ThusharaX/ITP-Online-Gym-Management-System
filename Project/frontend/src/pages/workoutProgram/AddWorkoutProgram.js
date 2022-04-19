import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

const AddWorkoutProgram = () => {
	const { addWorkoutProgram, form, setOpened } = useContext(WorkoutProgramContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addWorkoutProgram(values))}>
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
					<TextInput required label="Day" placeholder="Workout Program Day" {...form.getInputProps("day")} />
					<TextInput required label="Time" placeholder="Workout Program Time" {...form.getInputProps("time")} />

					<Group position="right" mt="md">
						<Button
							onClick={() => {
								setOpened(false);
							}}
							type="submit"
						>
							Create
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddWorkoutProgram;
