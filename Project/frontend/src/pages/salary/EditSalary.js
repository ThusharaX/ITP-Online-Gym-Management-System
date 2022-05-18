import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Modal, NumberInput, Autocomplete } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";

import SalaryContext from "../../contexts/SalaryContext";

const EditSalary = () => {
	const { editSalary, salary, setEditOpened, months, schema, editOpened } = useContext(SalaryContext);

	// Form initial state
	let form = useForm({
		//schema: joiResolver(schema),
		initialValues: {
			id: salary._id,
			nic: salary.nic,
			year: salary.year,
			month: salary.month,
			basicSalary: salary.basicSalary,
			otHours: salary.otHours,
			otRate: salary.otRate,
			otTotal: salary.otTotal,
			totalSalary: salary.totalSalary,
		},
	});
	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Salary">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							editSalary(values);
							setEditOpened(false);
						})}
					>
						<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
						<TextInput required label="Year" placeholder="Year" {...form.getInputProps("year")} />
						<Autocomplete required label="Month" placeholder="Month" data={months} {...form.getInputProps("month")} />
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
							<Button type="submit">Edit</Button>
							<Button onClick={() => setEditOpened(false)} color="red">
								Cancel
							</Button>
						</Group>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default EditSalary;
