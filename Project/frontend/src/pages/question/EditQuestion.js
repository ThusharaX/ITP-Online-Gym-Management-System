import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Modal } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";

import QuestionContext from "../../contexts/QuestionContext";

const EditQuestion = () => {
	const { editQuestion, question, setEditOpened, editOpened } = useContext(QuestionContext);

	// Form initial state
	let form = useForm({
		//schema: joiResolver(schema),
		initialValues: {
			//id,email,name,title,content
			id: question._id,
			email: question.email,
			name: question.name,
			title: question.title,
			content: question.content,
		},
	});
	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Question">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							editQuestion(values);
							setEditOpened(false);
						})}
					>
						<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
						<TextInput required label="Name" placeholder="Name" {...form.getInputProps("name")} />
						<TextInput required label="Title" placeholder="Title" {...form.getInputProps("title")} />
						<TextInput required label="Content" placeholder="Content" {...form.getInputProps("content")} />
						<Group position="right" mt="md">
							<Button type="submit">Edit</Button>
							<Button onClick={() => setEditOpened(false)} color="red">
								Cancel
							</Button>
						</Group>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default EditQuestion;
