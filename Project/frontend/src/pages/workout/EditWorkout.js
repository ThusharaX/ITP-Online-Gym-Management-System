import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import WorkoutContext from "../../contexts/WorkoutContext";

const EditWorkout = () => {
	const { editWorkout, setEditOpened, workout } = useContext(WorkoutContext);

	// Form initial state
	let form = useForm({
		initialValues: {
			id: workout._id,
			workout_name: workout.workout_name,
			workout_category: workout.workout_category,
			muscle_group: workout.muscle_group,
			starting_position_img: workout.starting_position_img,
			mid_position_img: workout.mid_position_img,
			instructions: workout.instructions,
			action: workout.action,
			tips: workout.tips,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form
					onSubmit={form.onSubmit((values) => {
						editWorkout(values);
						setEditOpened(false);
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

export default EditWorkout;
