import React, { useState, useContext } from "react";
import { createStyles, Table, ScrollArea, ActionIcon, Modal } from "@mantine/core";
import SalaryContext from "../../contexts/SalaryContext";
import { Pencil } from "tabler-icons-react";
import EditSalary from "./EditSalary";

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

function SalaryTableScrollArea() {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);
	const { salaries, setSalary, setEditOpened, editOpened } = useContext(SalaryContext);

	const rows = salaries.map((row) => (
		<tr key={row._id}>
			<td>{row._id}</td>
			<td>{row.nic}</td>
			<td>{row.year}</td>
			<td>{row.month}</td>
			<td>{row.basicSalary}</td>
			<td>{row.otHours}</td>
			<td>{row.otRate}</td>
			<td>{row.otTotal}</td>
			<td>{row.totalSalary}</td>
			<td>
				{localStorage.getItem("permissionLevel") === "ADMIN" && (
					<ActionIcon color={"blue"}>
						<Pencil
							size={16}
							onClick={() => {
								setSalary(row);
								setEditOpened(true);
							}}
						/>
					</ActionIcon>
				)}
			</td>
		</tr>
	));

	return (
		<>
			{/*Edit salary Modal*/}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Salary">
				<EditSalary />
			</Modal>

			<ScrollArea sx={{ height: 600 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
				<Table sx={{ minWidth: 700, margin: 20 }}>
					<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
						<tr>
							<th>ID</th>
							<th>NIC</th>
							<th>Year</th>
							<th>Month</th>
							<th>Basic Salary</th>
							<th>OT Hours</th>
							<th>OT rate</th>
							<th>Total OT</th>
							<th>Total Salary</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
		</>
	);
}

export default SalaryTableScrollArea;
