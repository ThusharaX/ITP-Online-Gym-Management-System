import React, { useState, useContext } from "react";
import { createStyles, Table, ScrollArea, ActionIcon, Modal } from "@mantine/core";
import EmployeeContext from "../../contexts/EmployeeContext";
import { Pencil, Trash } from "tabler-icons-react";
import EditEmployee from "./EditEmployee";

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		top: 0,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease",

		"&::after": {
			content: "''",
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
			borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2]}`,
		},
	},

	scrolled: {
		boxShadow: theme.shadows.sm,
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},
}));

function EmployeeTableScrollArea() {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);
	const { employees, setEmployee, confirmDelete, setEditOpened, editOpened } = useContext(EmployeeContext);

	const rows = employees.map((row) => (
		<tr key={row._id}>
			<td>{row._id}</td>
			<td>{row.firstName}</td>
			<td>{row.lastName}</td>
			<td>{row.username}</td>
			<td>{row.nic}</td>
			<td>{row.email}</td>
			<td>{row.dob}</td>
			<td>{row.phoneNumber}</td>
			<td>{row.qualifications}</td>
			<td>
				<ActionIcon color={"blue"}>
					<Pencil
						size={16}
						onClick={() => {
							setEmployee(row);
							setEditOpened(true);
						}}
					/>
				</ActionIcon>
			</td>
			<td>
				<ActionIcon color="red">
					<Trash size={16} onClick={() => confirmDelete(row._id)} />
				</ActionIcon>
			</td>
		</tr>
	));

	return (
		<>
			{/* Edit salary Modal */}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Employee">
				<EditEmployee />
			</Modal>

			<ScrollArea sx={{ height: 600 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
				<Table sx={{ minWidth: 700, margin: 20 }}>
					<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
							<th>NIC</th>
							<th>Email</th>
							<th>DOB</th>
							<th>Phone Number</th>
							<th>Qualifications</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
		</>
	);
}

export default EmployeeTableScrollArea;
