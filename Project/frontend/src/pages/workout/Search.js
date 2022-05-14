import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import WorkoutContext from "../../contexts/WorkoutContext";
import WorkoutAPI from "../../contexts/api/WorkoutAPI";

function Search() {
	const { setWorkouts } = useContext(WorkoutContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		WorkoutAPI.searchWorkout(values.search).then((response) => {
			setWorkouts(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		WorkoutAPI.getWorkoutData().then((response) => {
			setWorkouts(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput required label="Search" placeholder="Bench Press" {...form.getInputProps("search")} />

				<Group position="right" mt="md">
					<Button type="submit">Search</Button>
					<Button type="reset" onClick={handleResetSearch}>
						Reset
					</Button>
				</Group>
			</form>
		</Box>
	);
}

export default Search;
