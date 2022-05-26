import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import QuestionContext from "../../contexts/QuestionContext";

const addAnswer = () => {
	const { addAnswer, answerForm } = useContext(QuestionContext);

	return (
		<>
			<div align="right" style={{ paddingTop: "10%" }}>
				<Box sx={{ maxWidth: 300 }} mx="auto">
					<form onSubmit={answerForm.onSubmit((values) => addAnswer(values))}>
						<TextInput required label="Answer" placeholder="Answer" {...answerForm.getInputProps("answer")} />
						<Group position="right" mt="md">
							<Button type="submit">Add Answer</Button>
						</Group>
					</form>
				</Box>
			</div>
		</>
	);
};

export default addAnswer;
