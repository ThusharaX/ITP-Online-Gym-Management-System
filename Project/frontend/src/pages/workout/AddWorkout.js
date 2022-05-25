import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import WorkoutContext from "../../contexts/WorkoutContext";

const AddWorkout = () => {
	const { addWorkout, form, setOpened, fillWithDummyData } = useContext(WorkoutContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form
					onSubmit={form.onSubmit((values) => {
						addWorkout(values);
						setOpened(false);
					})}
				>
					<TextInput required name="workout_name" label="Workout Name" {...form.getInputProps("workout_name")} />
					<TextInput
						required
						name="workout_category"
						label="Workout Category"
						{...form.getInputProps("workout_category")}
					/>
					<TextInput required name="muscle_group" label="Muscle Group" {...form.getInputProps("muscle_group")} />
					<TextInput
						required
						name="starting_position_img"
						label="Starting Position Image"
						{...form.getInputProps("starting_position_img")}
					/>
					<TextInput
						required
						name="mid_position_img"
						label="Mid Position Image"
						{...form.getInputProps("mid_position_img")}
					/>
					<TextInput required name="instructions" label="Instructions" {...form.getInputProps("instructions")} />
					<TextInput required name="action" label="Action" {...form.getInputProps("action")} />
					<TextInput name="tips" label="Tips" {...form.getInputProps("tips")} />

					<Group position="right" mt="md">
						{/* Demo button for fill from with dummy data */}
						<Button onClick={() => fillWithDummyData()} color="green">
							Demo
						</Button>
						<Button type="submit">Create</Button>
						<Button
							onClick={() => {
								setOpened(false);
								form.reset();
							}}
							color="red"
						>
							Cancel
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddWorkout;
