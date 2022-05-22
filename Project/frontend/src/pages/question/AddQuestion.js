import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";
import { DropletFilled } from "tabler-icons-react";

const AddQuestion = () => {
	const { addQuestion, form } = useContext(QuestionContext);

	return (
		<>
			<div
				style={{
					// background: "linear-gradient(to right,#36d1dc , #5b86e5)",
					//make background image full screen and cover the rest of the page
					backgroundImage:
						"url(https://images.unsplash.com/photo-1636657156745-338e53598328?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
				}}
			>
				<div align="right" style={{ paddingTop: "10%" }}>
					<Box sx={{ maxWidth: 300 }} mx="auto">
						<form onSubmit={form.onSubmit((values) => addQuestion(values))}>
							<h1>Ask Question</h1>
							<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
							<TextInput required label="Name" placeholder="Name" {...form.getInputProps("name")} />
							<TextInput
								required
								label="Question Title"
								placeholder="Question Title"
								{...form.getInputProps("title")}
							/>
							<TextInput required label="Question" placeholder="Question Content" {...form.getInputProps("content")} />
							<Group position="right" mt="md">
								<Button type="submit">Ask Question</Button>
							</Group>
						</form>
					</Box>
				</div>
			</div>
		</>
	);
};

export default AddQuestion;
