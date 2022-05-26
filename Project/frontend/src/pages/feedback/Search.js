import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import FeedbackContext from "../../contexts/FeedbackContext";
import FeedbackAPI from "../../contexts/api/FeedbackAPI";

function Search() {
	const { setFeedbacks } = useContext(FeedbackContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		FeedbackAPI.searchFeedback(values.search).then((response) => {
			setFeedbacks(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		FeedbackAPI.getFeedbackData().then((response) => {
			setFeedbacks(response.data);
		});
	};

	return (
		<div align="right" style={{ paddingTop: "10%" }}>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
					<TextInput placeholder="Feedback" {...form.getInputProps("search")} />

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
