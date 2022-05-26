import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import EmployeeContext from "../../contexts/EmployeeContext";
import EmployeeAPI from "../../contexts/api/EmployeeAPI";

function Search() {
	const { setEmployees } = useContext(EmployeeContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		EmployeeAPI.searchEmployee(values.search).then((response) => {
			setEmployees(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		EmployeeAPI.getEmployeeData().then((response) => {
			setEmployees(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput placeholder="Salary" {...form.getInputProps("search")} />

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
