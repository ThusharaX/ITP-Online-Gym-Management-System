import React, { useContext } from "react";
import { Button, useMantineTheme, Table, Modal } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";

import EditWorkoutScR from "./EditWorkoutScRList";

import WorkoutScRContext from "../../contexts/WorkoutScRContext";

function WorkoutScRList() {
	const { WorkoutScR, confirmDelete, editOpened, setEditOpened, setWorkoutScR } = useContext(WorkoutScRContext);

	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Workout Program">
		<EditWorkoutScR />
	</Modal>;

	const rows = WorkoutScR.map((element) => (
		<tr key={element._id}>
			<td>{element.name}</td>
			<td>{element.age}</td>
			<td>{element.gender}</td>
			<td>{element.email}</td>
			<td>{element.requirement}</td>
			<td>
				<Button
					onClick={() => {
						setWorkoutScR(element);
						setEditOpened(true);
					}}
					compact
					leftIcon={<Edit size={16} />}
				>
					Edit
				</Button>
			</td>
			<td>
				<Button onClick={() => confirmDelete(element._id)} color="red" compact leftIcon={<Trash size={16} />}>
					Delete
				</Button>
			</td>
		</tr>
	));

	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Request ">
				<EditWorkoutScR />
			</Modal>

			<Table fontSize="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
				<thead fontSize="xl">
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

export default WorkoutScRList;
