import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Modal, NumberInput, Autocomplete } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";

import FeedbackContext from "../../contexts/FeedbackContext";

const EditFeedback = () => {
	const { editFeedback, feedback, setEditOpened, editOpened } = useContext(FeedbackContext);

	// Form initial state
	let form = useForm({
		//schema: joiResolver(schema),
		initialValues: {
			id: feedback._id,
			email: feedback.email,
			displayname: feedback.displayname,
			ftitle: feedback.ftitle,
			feedback: feedback.feedback,
		},
	});
	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Feedback">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							editFeedback(values);
							setEditOpened(false);
						})}
					>
						<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
						<TextInput
							required
							label="Display Name"
							placeholder="Display Name"
							{...form.getInputProps("displayname")}
						/>
						<TextInput required label="Feedback Title" placeholder="Feedback Title" {...form.getInputProps("ftitle")} />
						<TextInput required label="Feedback" placeholder="Feedback" {...form.getInputProps("feedback")} />

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

export default EditFeedback;
