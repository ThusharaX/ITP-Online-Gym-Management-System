import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import BlogContext from "../../contexts/BlogContext";

const AddBlog = () => {
	const { addBlog, form, setOpened } = useContext(BlogContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addBlog(values))}>
					<TextInput required name="trname" label="Trainer Name" {...form.getInputProps("trname")} />
					<TextInput required name="title" label="Title" {...form.getInputProps("title")} />
					<TextInput required name="description" label="Description" {...form.getInputProps("description")} />
					<TextInput required name="fb" label="Facebook" {...form.getInputProps("fb")} />
					<TextInput required name="wNum" label="Phone Number" {...form.getInputProps("wNum")} />
					<TextInput required name="email" label="Email" {...form.getInputProps("email")} />
					<TextInput required name="monday" label="Monday" {...form.getInputProps("monday")} />
					<TextInput required name="tuesday" label="Tuesday" {...form.getInputProps("tuesday")} />
					<TextInput required name="wednesday" label="Wednesday" {...form.getInputProps("wednesday")} />
					<TextInput required name="thursday" label="Thursday" {...form.getInputProps("thursday")} />
					<TextInput required name="friday" label="Friday" {...form.getInputProps("friday")} />
					<TextInput required name="saturday" label="Saturday" {...form.getInputProps("saturday")} />
					<TextInput required name="sunday" label="Sunday" {...form.getInputProps("sunday")} />

					<Group position="right" mt="md">
						<Button
							onClick={() => {
								setOpened(false);
							}}
							type="submit"
						>
							Create
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddBlog;
