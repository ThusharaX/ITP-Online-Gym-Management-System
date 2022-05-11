import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import BlogContext from "../../contexts/BlogContext";

const EditBlog = () => {
	const { editBlog, setEditOpened, blog } = useContext(BlogContext);

	// Form initial state
	let form = useForm({
		initialValues: {
			//id: workout._id,
			id: blog._id,
			trname: blog.trname,
			title: blog.title,
			description: blog.description,
			fb: blog.fb,
			wNum: blog.wNum,
			email: blog.email,
			monday: blog.monday,
			tuesday: blog.tuesday,
			wednesday: blog.wednesday,
			thursday: blog.thursday,
			friday: blog.friday,
			saturday: blog.saturday,
			sunday: blog.sunday,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => editBlog(values))}>
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
								setEditOpened(false);
							}}
							type="submit"
						>
							Update
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditBlog;
