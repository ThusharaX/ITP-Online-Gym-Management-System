import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import MemberContext from "../../contexts/MemberContext";
import MemberAPI from "../../contexts/api/MemberAPI";

function Search() {
	const { setMembers } = useContext(MemberContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		MemberAPI.searchMember(values.search).then((response) => {
			setMembers(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		MemberAPI.getMembers().then((response) => {
			setMembers(response.data);
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
