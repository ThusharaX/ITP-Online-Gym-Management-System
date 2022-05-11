import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import SalaryContext from "../../contexts/SalaryContext";

const EditSalary = () => {
	const { editSalary, salary, setEditOpened } = useContext(SalaryContext);

	// Form initial state
	let form = useForm({
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
			<Box sx={{ maxWidth: 500 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => editSalary(values))}>
					<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
					<TextInput required label="Year" placeholder="Year" {...form.getInputProps("year")} />
					<TextInput required label="Month" placeholder="Month" {...form.getInputProps("month")} />
					<TextInput required label="Basic Salary" placeholder="Basic Salary" {...form.getInputProps("basicSalary")} />
					<TextInput required label="OT Hours" placeholder="OT Hours" {...form.getInputProps("otHours")} />
					<TextInput required label="OT Rate" placeholder="OT Rate" {...form.getInputProps("otRate")} />
					<TextInput required label="Total OT" placeholder="Total OT" {...form.getInputProps("otTotal")} />
					<TextInput required label="Total Salary" placeholder="Total Salary" {...form.getInputProps("totalSalary")} />
					<Group position="right" mt="md">
						<Button type="submit" onClick={() => setEditOpened(false)}>
							Edit
						</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default EditSalary;
