import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";
import { DropletFilled } from "tabler-icons-react";

const AddQuestion = () => {
	const { addQuestion, form } = useContext(QuestionContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addQuestion(values))}>
					<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
					<TextInput required label="Name" placeholder="Name" {...form.getInputProps("name")} />
					<TextInput required label="Question Title" placeholder="Question Title" {...form.getInputProps("title")} />
					<TextInput required label="Question" placeholder="Question Content" {...form.getInputProps("content")} />
					<Group position="right" mt="md">
						<Button type="submit">Ask Question</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddQuestion;
