import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Modal } from "@mantine/core";

import SalaryContext from "../../contexts/SalaryContext";

const AddSalary = () => {
	const { addSalary, form, setOpened, opened } = useContext(SalaryContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Salary">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form onSubmit={form.onSubmit((values) => addSalary(values))}>
						<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
						<TextInput required label="Year" placeholder="Year" {...form.getInputProps("year")} />
						<TextInput required label="Month" placeholder="Month" {...form.getInputProps("month")} />
						<TextInput
							required
							label="Basic Salary"
							placeholder="Basic Salary"
							{...form.getInputProps("basicSalary")}
						/>
						<TextInput required label="OT Hours" placeholder="OT Hours" {...form.getInputProps("otHours")} />
						<TextInput required label="OT Rate" placeholder="OT Rate" {...form.getInputProps("otRate")} />
						<TextInput required label="Total OT" placeholder="Total OT" {...form.getInputProps("otTotal")} />
						<TextInput
							required
							label="Total Salary"
							placeholder="Total Salary"
							{...form.getInputProps("totalSalary")}
						/>

						<Group position="right" mt="md">
							<Button
								sx={{ width: 150, margin: 20 }}
								onClick={() => {
									setOpened(false);
								}}
								type="submit"
							>
								Add Salary
							</Button>
						</Group>
					</form>
				</Box>
			</Modal>

			<Group position="left" style={{ marginLeft: 20, marginBottom: "1rem" }}>
				<Button onClick={() => setOpened(true)}>Add New Salary</Button>
			</Group>
		</>
	);
};

export default AddSalary;
