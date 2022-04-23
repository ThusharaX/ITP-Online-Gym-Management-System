import React, { useContext } from "react";
import { Button, TextInput, Group, Box } from "@mantine/core";

import SalaryContext from "../../contexts/SalaryContext";

const AddSalary = () => {
	const { addSalary, form } = useContext(SalaryContext);

	return (
		<>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addSalary(values))}>
					<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
					<TextInput required label="Year" placeholder="Year" {...form.getInputProps("year")} />
					<TextInput required label="Month" placeholder="Month" {...form.getInputProps("month")} />
					<TextInput required label="Basic Salary" placeholder="Basic Salary" {...form.getInputProps("basicSalary")} />
					<TextInput required label="OT Hours" placeholder="OT Hours" {...form.getInputProps("otHours")} />
					<TextInput required label="OT Rate" placeholder="OT Rate" {...form.getInputProps("otRate")} />
					<TextInput required label="Total OT" placeholder="Total OT" {...form.getInputProps("otTotal")} />
					<TextInput required label="Total Salary" placeholder="Total Salary" {...form.getInputProps("totalSalary")} />

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</>
	);
};

export default AddSalary;
