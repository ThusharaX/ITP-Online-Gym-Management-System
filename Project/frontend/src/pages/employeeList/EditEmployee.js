import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Modal, Autocomplete } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, joiResolver } from "@mantine/form";

import EmployeeContext from "../../contexts/EmployeeContext";

const EditEmployee = () => {
	const { editEmployee, employee, setEditOpened, schema, editOpened } = useContext(EmployeeContext);
	const [date, setDate] = useState(new Date());

	// Form initial state
	let form = useForm({
		//schema: joiResolver(schema),
		initialValues: {
			id: employee._id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			username: employee.username,
			nic: employee.nic,
			email: employee.email,
			dob: employee.dob,
			phoneNumber: employee.phoneNumber,
			qualifications: String(employee.qualifications).split(","),
		},
	});
	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Employee">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							editEmployee(values);
							setEditOpened(false);
						})}
					>
						<TextInput required label="First Name" placeholder="First Name" {...form.getInputProps("firstName")} />
						<TextInput required label="Last Name" placeholder="Last Name" {...form.getInputProps("lastName")} />
						<TextInput required label="Username" placeholder="Username" {...form.getInputProps("username")} />
						<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
						<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
						<DatePicker
							size="md"
							placeholder="Date of Birth"
							label="Date of Birth"
							required
							value={date}
							onChange={setDate}
							{...form.getInputProps("dob")}
						/>
						<TextInput
							required
							label="Phone Number"
							placeholder="Phone Number"
							{...form.getInputProps("phoneNumber")}
						/>
						<TextInput
							required
							label="Qualifications"
							placeholder="Qualifications"
							{...form.getInputProps("qualifications")}
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

export default EditEmployee;
