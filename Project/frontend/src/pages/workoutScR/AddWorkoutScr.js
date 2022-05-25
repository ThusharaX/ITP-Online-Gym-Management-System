import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, TextInput, Group, Box, NumberInput } from "@mantine/core";
import WorkoutScRContext from "../../contexts/WorkoutScRContext";

const AddWorkoutScR = () => {
	const { addWorkoutScR, form, getOneWorkoutData } = useContext(WorkoutScRContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addWorkoutScR(values))}>
					<TextInput required label="Name" placeholder="Enter Name" mt="sm" {...form.getInputProps("name")} />

					<NumberInput required label="Age" placeholder="Enter Your Age" mt="sm" {...form.getInputProps("age")} />

					<TextInput required label="Gender" placeholder="Male or Female" mt="sm" {...form.getInputProps("gender")} />

					<TextInput required label="Email" placeholder="example@mail.com" {...form.getInputProps("email")} />

					<TextInput
						required
						placeholder="Enter Your Requirement"
						label="Requirment"
						mt="sm"
						{...form.getInputProps("requirement")}
					/>

					<Group position="center" mt="xl">
						<Button type="submit">Submit</Button>
						<Button color="green" type="submit">
							<Link to="/myworkoutscr">Workout Request Schedule</Link>
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddWorkoutScR;
