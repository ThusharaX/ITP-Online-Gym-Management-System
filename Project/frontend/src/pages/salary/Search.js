import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import SalaryContext from "../../contexts/SalaryContext";
import SalaryAPI from "../../contexts/api/SalaryAPI";

function Search() {
	const { setSalaries } = useContext(SalaryContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		SalaryAPI.searchSalary(values.search).then((response) => {
			setSalaries(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		SalaryAPI.getSalaryData().then((response) => {
			setSalaries(response.data);
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
