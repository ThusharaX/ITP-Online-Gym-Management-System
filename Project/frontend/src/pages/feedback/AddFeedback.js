import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import FeedbackContext from "../../contexts/FeedbackContext";
// import { DropletFilled } from "tabler-icons-react";

const AddFeedback = () => {
	const { addFeedback, form } = useContext(FeedbackContext);

	return (
		<>
			<div align="right" style={{ paddingTop: "10%" }}>
				<Box sx={{ maxWidth: 300 }} mx="auto">
					<form onSubmit={form.onSubmit((values) => addFeedback(values))}>
						<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
						<TextInput required label="Name" placeholder="Name" {...form.getInputProps("displayname")} />
						<TextInput required label="Feedback Title" placeholder="Feedback Title" {...form.getInputProps("ftitle")} />
						<TextInput required label="Feedback" placeholder="Feedback Content" {...form.getInputProps("feedback")} />
						<Group position="right" mt="md">
							<Button type="submit">submit Feedback</Button>
						</Group>
					</form>
				</Box>
			</div>
		</>
	);
};

export default AddFeedback;
