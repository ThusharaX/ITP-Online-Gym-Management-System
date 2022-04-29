import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Select } from "@mantine/core";
import { useForm } from "@mantine/form";

import NoticeContext from "../../contexts/NoticeContext";

const EditNotice = () => {
	const { editNotice, setEditOpened, notice } = useContext(NoticeContext);

	// Form initial state
	let form = useForm({
		initialValues: {
			id: notice._id,
			title: notice.title,
			content: notice.content,
			category: notice.category,
		},
	});

	return (
		<>
			<Box sx={{ maxWidth: 800 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => editNotice(values))}>
					<TextInput required label="Title" placeholder="Notice Title" {...form.getInputProps("title")} />
					<TextInput required label="Content" placeholder="Notice Content" {...form.getInputProps("content")} />
					<Select
						label="Category"
						placeholder="Select one"
						data={[
							{ value: "Holiday", label: "Holiday" },
							{ value: "Promotion", label: "Promotion" },
							{ value: "Offer", label: "Offer" },
							{ value: "Event", label: "Event" },
							{ value: "System_Maintaince", label: "System Maintaince" },
						]}
						{...form.getInputProps("category")}
					/>

					<Group position="right" mt="md">
						<Button type="submit" onAuxClick={() => setEditOpened(false)}>
							Edit
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditNotice;
