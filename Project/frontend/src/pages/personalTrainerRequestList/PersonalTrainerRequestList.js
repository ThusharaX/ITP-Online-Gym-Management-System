import React, { useState, useContext } from "react";
import {
	Text,
	Badge,
	Button,
	Group,
	useMantineTheme,
	Table,
	Card,
	Modal,
	Avatar,
	Grid,
	Container,
} from "@mantine/core";
import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";

import { Edit, Trash, Typography } from "tabler-icons-react";
import EditRequest from "./EditRequest";

function PersonalTrainerRequestList() {
	const { Request, confirmDelete, setEditOpened, setRequest, editOpened } = useContext(PersonalTrainerRequestContext);
	const theme = useMantineTheme();

	// const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	const rows = Request.map((row) => (
		<tr key={row._id}>
			<td>
				{/* <Grid Container>
					<Grid item sm={2}>
						<Avatar alt={row.name} src="./" color="red" />
					</Grid>
					<br />
					<Grid item sm={10}> */}
				{row.name}
				{/* </Grid>
				</Grid> */}
			</td>
			<td>{row.perTrainer}</td>
			<td>{row.timeSlot}</td>
			<td>{row.TrainDay}</td>
			<td>{row.package}</td>
			<td
				style={{
					fontWeight: "bold",
					fontSize: "0.75rem",
					color: "white",
					backgroundColor:
						(row.status === "Active" && "yellow") ||
						(row.status === "Pending" && "green") ||
						(row.status === "Blocked" && "red"),
					borderRadius: 8,
					padding: "3px 10px",
					display: "inline-block",
				}}
			>
				{row.status}
			</td>
			<td>
				<Button
					onClick={() => {
						setRequest(row);
						setEditOpened(true);
					}}
					variant="light"
					color="blue"
					compact
					leftIcon={<Edit size={16} />}
				>
					Edit
				</Button>
			</td>
			<td>
				<Button onClick={() => confirmDelete(row._id)} color="red" compact leftIcon={<Trash size={16} />}>
					Delete
				</Button>
			</td>
		</tr>
	));

	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Request ">
				<EditRequest />
			</Modal>

			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Personal Trainer</th>
						<th>Time Slots</th>
						<th>Train Day</th>
						<th>Package</th>
						<th>Status</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</>
	);
}

export default PersonalTrainerRequestList;
