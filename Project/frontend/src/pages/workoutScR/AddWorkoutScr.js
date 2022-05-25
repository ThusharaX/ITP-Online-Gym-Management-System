import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Button, TextInput, Group, Box, NumberInput, Image, Overlay } from "@mantine/core";
import WorkoutScRContext from "../../contexts/WorkoutScRContext";

const AddWorkoutScR = () => {
	const { addWorkoutScR, form, getOneWorkoutData } = useContext(WorkoutScRContext);

	return (
		<>
			<Group position="right" mt="xl">
				<Button variant="gradient" gradient={{ from: "teal", to: "lime", deg: 105 }}>
					<Link to="">MY Workout Requests</Link>
				</Button>
			</Group>
			<br></br>
			<div style={{ width: "auto", height: 100, marginLeft: "auto", marginRight: "auto" }}>
				<Image
					radius="md"
					src="https://www.muscleandfitness.com/wp-content/uploads/2019/11/Young-Muscular-Man-Doing-Lunges-In-Dark-Gym.jpg?quality=86&strip=all"
					alt="Random unsplash image"
				/>
			</div>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addWorkoutScR(values))}>
					<TextInput required label="Name" placeholder="Enter Your Name" mt="sm" {...form.getInputProps("name")} />

					<NumberInput required label="Age" placeholder="Enter Your Age" mt="sm" {...form.getInputProps("age")} />

					<TextInput required label="Gender" placeholder="Male or Female" mt="sm" {...form.getInputProps("gender")} />

					<TextInput required label="Email" placeholder="Enter Your Email" {...form.getInputProps("email")} />

					<TextInput
						required
						placeholder="Enter Your Requirement"
						label="Requirment"
						mt="sm"
						{...form.getInputProps("requirement")}
					/>

					<Group position="center" mt="xl">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddWorkoutScR;
