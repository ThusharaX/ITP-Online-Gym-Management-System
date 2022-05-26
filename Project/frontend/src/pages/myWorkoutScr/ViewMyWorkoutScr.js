import React, { useContext } from "react";
import { Text, Badge, Button, Group, useMantineTheme, Table } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";

import WorkoutScRContext from "../../contexts/WorkoutScRContext";

function ViewMyWorkoutScr() {
	const { WorkoutScR } = useContext(WorkoutScRContext);

	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	const rows = WorkoutScR.map((element) => {
		<tr key={element._id}>
			<td>{element.name}</td>
			<td>{element.age}</td>
			<td>{element.gender}</td>
			<td>{element.email}</td>
			<td>{element.requirement}</td>
			<td>
				{" "}
				<button>Edit</button>
			</td>
			<td>
				{" "}
				<button>Delete</button>
			</td>
		</tr>;
	});

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Member Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Email Address</th>
						<th>Requirement</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</>
	);
}

export default ViewMyWorkoutScr;
