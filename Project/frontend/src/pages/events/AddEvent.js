import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import EventContext from "../../contexts/EventContext";

const AddEvent = () => {
	const { addEvent, form } = useContext(EventContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addEvent(values))}>
					<TextInput required label="Title" placeholder="Event Title" {...form.getInputProps("title")} />
					<TextInput
						required
						label="Description"
						placeholder="Event Description"
						{...form.getInputProps("description")}
					/>
					<TextInput required label="details" placeholder="Event details" {...form.getInputProps("details")} />
					<TextInput required label="gender" placeholder="Event gender" {...form.getInputProps("gender")} />
					<TextInput required label="date" placeholder="Event date" {...form.getInputProps("date")} />
					<TextInput required label="tags" placeholder="Event tags" {...form.getInputProps("tags")} />
					<TextInput required label="trainer" placeholder="Event trainer" {...form.getInputProps("trainer")} />

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddEvent;
