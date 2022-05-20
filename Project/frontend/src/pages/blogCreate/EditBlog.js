import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";

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

					<br />

					<Group position="center">
						<Button
							type="submit"
							variant="outline"
							onClick={() => {
								setEditOpened(false);
								showNotification({
									id: "load-data",
									loading: true,
									title: "Loading your data",
									message: "Data will be loaded in 3 seconds, you cannot close this yet",
									autoClose: false,
									disallowClose: true,
								});

								setTimeout(() => {
									updateNotification({
										id: "load-data",
										color: "teal",
										title: "Data was loaded",
										message: "Notification will close in 2 seconds, you can close this notification now",
										icon: <CheckIcon />,
										autoClose: 2000,
									});
								}, 3000);
							}}
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
