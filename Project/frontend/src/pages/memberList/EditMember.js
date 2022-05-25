import React, { useContext, useState } from "react";
import { Button, TextInput, Group, Box, Modal, Autocomplete } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, joiResolver } from "@mantine/form";

import MemberContext from "../../contexts/MemberContext";

const EditMember = () => {
	const { editMember, member, setEditOpened, schema, editOpened } = useContext(MemberContext);
	const [date, setDate] = useState(new Date());

	// Form initial state
	let form = useForm({
		//schema: joiResolver(schema),
		initialValues: {
			id: member._id,
			firstName: member.firstName,
			lastName: member.lastName,
			username: member.username,
			nic: member.nic,
			email: member.email,
			dob: member.dob,
			phoneNumber: member.phoneNumber,
		},
	});
	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Member">
				<Box sx={{ maxWidth: 500 }} mx="auto">
					<form
						onSubmit={form.onSubmit((values) => {
							editMember(values);
							setEditOpened(false);
						})}
					>
						<TextInput required label="First Name" placeholder="First Name" {...form.getInputProps("firstName")} />
						<TextInput required label="Last Name" placeholder="Last Name" {...form.getInputProps("lastName")} />
						<TextInput required label="Username" placeholder="Username" {...form.getInputProps("username")} />
						<TextInput required label="NIC" placeholder="NIC" {...form.getInputProps("nic")} />
						<TextInput required label="Email" placeholder="Email" {...form.getInputProps("email")} />
						<DatePicker
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

export default EditMember;
