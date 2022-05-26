import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import QuestionContext from "../../contexts/QuestionContext";
import QuestionAPI from "../../contexts/api/QuestionAPI";

function Search() {
	const { setQuestions } = useContext(QuestionContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		QuestionAPI.searchQuestion(values.search).then((response) => {
			setQuestions(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		QuestionAPI.getQuestionData().then((response) => {
			setQuestions(response.data);
		});
	};

	return (
		<div align="right" style={{ paddingTop: "5%" }}>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
					<TextInput placeholder="Question" {...form.getInputProps("search")} />

					<Group position="right" mt="md">
						<Button type="submit">Search</Button>
						<Button type="reset" onClick={handleResetSearch}>
							Reset
						</Button>
					</Group>
				</form>
			</Box>
		</div>
	);
}

export default Search;
