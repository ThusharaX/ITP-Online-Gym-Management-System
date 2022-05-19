import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import PersonalTrainerRequestAPI from "../../contexts/api/PersonalTrainerRequestAPI";

function Search() {
	const { setRequests } = useContext(PersonalTrainerRequestContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		PersonalTrainerRequestAPI.searchRequest(values.search).then((response) => {
			setRequests(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		PersonalTrainerRequestAPI.getRequestData().then((response) => {
			setRequests(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput required label="Search" placeholder="Name" {...form.getInputProps("search")} />

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
