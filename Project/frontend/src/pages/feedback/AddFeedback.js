import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import FeedbackContext from "../../contexts/FeedbackContext";
import { H1 } from "tabler-icons-react";
// import { DropletFilled } from "tabler-icons-react";

const AddFeedback = () => {
	const { addFeedback, form } = useContext(FeedbackContext);

	return (
		<>
			<div
				align="right"
				style={{
					paddingTop: "10%",
					backgroundImage:
						"url(https://images.unsplash.com/photo-1469394721641-25268de61797?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1340)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
				}}
			>
				<Box sx={{ maxWidth: 300 }} mx="auto">
					<form onSubmit={form.onSubmit((values) => addFeedback(values))}>
						<h1 align="center">ADD Feedback</h1>
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
