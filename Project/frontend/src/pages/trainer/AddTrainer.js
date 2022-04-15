import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import TrainerContext from "../../contexts/TrainerContext";

const AddTrainer = () => {
	const { addTrainer, form } = useContext(TrainerContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addTrainer(values))}>
					<TextInput required label="Image URL" placeholder="Enter Image URL" {...form.getInputProps("photoURL")} />
					<TextInput required label="Name" placeholder="Trainer Program Name" {...form.getInputProps("name")} />
					<TextInput
						required
						label="Description"
						placeholder="Trainer Program Description"
						{...form.getInputProps("description")}
					/>
					<TextInput
						required
						label="Conducted By"
						placeholder="Trainer Program Conducted By"
						{...form.getInputProps("conducted_by")}
					/>
					<TextInput required label="Fee" placeholder="Trainer Program Fee" {...form.getInputProps("fee")} />
					<TextInput required label="Day" placeholder="Trainer Program Day" {...form.getInputProps("day")} />
					<TextInput required label="Time" placeholder="Trainer Program Time" {...form.getInputProps("time")} />

					<Group position="right" mt="md">
						<Button type="submit">Add Trainer Program</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddTrainer;
