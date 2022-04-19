import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import SampleContext from "../../contexts/SampleContext";

const AddSample = () => {
	const { addSample, form } = useContext(SampleContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addSample(values))}>
					<TextInput required label="Title" placeholder="Sample Title" {...form.getInputProps("title")} />
					<TextInput required label="Content" placeholder="Sample Content" {...form.getInputProps("content")} />

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddSample;
