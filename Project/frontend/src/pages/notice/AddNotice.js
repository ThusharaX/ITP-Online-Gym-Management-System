import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Select } from "@mantine/core";

import NoticeContext from "../../contexts/NoticeContext";

const AddNotice = () => {
	const { addNotice, form } = useContext(NoticeContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addNotice(values))}>
					<TextInput required label="Title" placeholder="Notice Title" {...form.getInputProps("title")} />
					<TextInput required label="Content" placeholder="Notice Content" {...form.getInputProps("content")} />
					<Select
						label="Category"
						placeholder="Select one"
						data={[
							{ value: "hd", label: "Holiday" },
							{ value: "promo", label: "Promotion" },
							{ value: "offer", label: "Offer" },
							{ value: "event", label: "Event" },
							{ value: "sm", label: "System Maintaince" },
						]}
						{...form.getInputProps("category")}
					/>

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddNotice;
