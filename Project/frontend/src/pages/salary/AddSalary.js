import React, { useContext } from "react";
import { Button, TextInput, Group, Box, Modal, NumberInput, Autocomplete } from "@mantine/core";

import SalaryContext from "../../contexts/SalaryContext";

const AddSalary = () => {
	const { addSalary, form, setOpened, opened, months } = useContext(SalaryContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Salary">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							addSalary(values);
							setOpened(false);
						})}
					>
						<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
						<NumberInput required label="Year" placeholder="Year" {...form.getInputProps("year")} />
						<Autocomplete required label="Month" placeholder="Month" data={months} {...form.getInputProps("month")} />
						<NumberInput
							required
							label="Basic Salary"
							placeholder="Basic Salary"
							{...form.getInputProps("basicSalary")}
						/>
						<NumberInput required label="OT Hours" placeholder="OT Hours" {...form.getInputProps("otHours")} />
						<NumberInput required label="OT Rate" placeholder="OT Rate" {...form.getInputProps("otRate")} />
						<NumberInput required label="Total OT" placeholder="Total OT" {...form.getInputProps("otTotal")} />
						<NumberInput
							required
							label="Total Salary"
							placeholder="Total Salary"
							{...form.getInputProps("totalSalary")}
						/>

						<Group position="right" mt="md">
							<Button sx={{ width: 150, margin: 20 }} type="submit">
								Add Salary
							</Button>
							<Button sx={{ width: 150, margin: 20 }} onClick={() => setOpened(false)} color="red">
								Cancel
							</Button>
						</Group>
					</form>
				</Box>
			</Modal>

			<Group position="left" style={{ marginLeft: 20, marginBottom: "1rem" }}>
				{localStorage.getItem("permissionLevel") === "ADMIN" && (
					<Button onClick={() => setOpened(true)}>Add New Salary</Button>
				)}
			</Group>
		</>
	);
};

export default AddSalary;
