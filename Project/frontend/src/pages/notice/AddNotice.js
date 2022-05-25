import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Select, Modal } from "@mantine/core";

import NoticeContext from "../../contexts/NoticeContext";

const AddNotice = () => {
	const { addNotice, form, setOpened, opened } = useContext(NoticeContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Create Notice">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form onSubmit={form.onSubmit((values) => addNotice(values))}>
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
							<Button
								sx={{ width: 150, margin: 20 }}
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
			</Modal>
			<Group position="left" style={{ marginLeft: 20 }}>
				<Button onClick={() => setOpened(true)}>Create Notice</Button>
			</Group>
		</>
	);
};

export default AddNotice;
