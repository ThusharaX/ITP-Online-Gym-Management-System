import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";
import WorkoutProgramAPI from "../../contexts/api/WorkoutProgramAPI";

function Search() {
	const { setWorkoutPrograms } = useContext(WorkoutProgramContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		WorkoutProgramAPI.searchWorkoutProgram(values.search).then((response) => {
			setWorkoutPrograms(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		WorkoutProgramAPI.getWorkoutProgramData().then((response) => {
			setWorkoutPrograms(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput required label="Search" placeholder="Yoga" {...form.getInputProps("search")} />

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
