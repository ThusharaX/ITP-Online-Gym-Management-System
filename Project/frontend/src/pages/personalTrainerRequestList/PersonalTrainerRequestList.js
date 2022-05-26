import React, { useState, useContext } from "react";
import {
	Badge,
	Table,
	Select,
	ScrollArea,
	Button,
	Modal,
	ActionIcon,
	useMantineTheme,
	Pagination,
} from "@mantine/core";
import PersonalTrainerRequestContext from "../../contexts/PersonalTrainerRequestContext";
import EditRequest from "./EditRequest";
import { Edit, Mail, Trash } from "tabler-icons-react";

function PersonalTrainerRequestList() {
	const { requests, confirmDelete, setEditOpened, setRequest, editOpened } = useContext(PersonalTrainerRequestContext);
	const theme = useMantineTheme();
	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.dark[9];

	const rows = requests.map((item) => (
		<tr key={item._id}>
			<td>{item.name}</td>
			<td>{item.perTrainer}</td>
			<td>{item.timeSlot}</td>
			<td>{item.TrainDay}</td>
			<td>{item.package}</td>

			{/* <td>
				<Select data={rolesData} defaultValue={item.status} />
				{item.status}
			</td> */}

			<td
				style={{
					fontWeight: "bold",
					fontSize: "0.75rem",
					color: "white",
					backgroundColor:
						(item.status === "Active" && "orange") ||
						(item.status === "Pending" && "green") ||
						(item.status === "Blocked" && "red"),
					borderRadius: 8,
					padding: "3px 10px",
					display: "inline-block",
				}}
			>
				{item.status}
			</td>

			<td>{Math.floor(Math.random() * 6 + 5)} days ago</td>

			<td>
				<Button
					onClick={() => {
						setRequest(item);
						setEditOpened(true);
					}}
					variant="gradient"
					gradient={{ from: "teal", to: "lime", deg: 105 }}
					compact
					leftIcon={<Edit size={16} />}
				>
					Edit
				</Button>
			</td>
			<td>
				<Button
					onClick={() => confirmDelete(item._id)}
					variant="gradient"
					gradient={{ from: "orange", to: "red" }}
					compact
					leftIcon={<Trash size={16} />}
				>
					Delete
				</Button>
			</td>
			<td>
				<Button
					onClick={() => {}}
					variant="gradient"
					compact
					leftIcon={<Mail size={16} />}
					gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
				>
					Send Mail
				</Button>
			</td>
		</tr>
	));

	return (
		<>
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Request ">
				<EditRequest />
			</Modal>
			<ScrollArea>
				<Table striped highlightOnHover sx={{ minWidth: 800 }} verticalSpacing="sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Personal Trainer</th>
							<th>Time Slot</th>
							<th>Train Day</th>
							<th>Package</th>
							<th>Status</th>
							<th>Last Active Date</th>

							<th>Edit</th>
							<th>Delete</th>
							<th>Send E-mail</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
				{/* <Pagination total={10} />; */}
			</ScrollArea>
		</>
	);
}
export default PersonalTrainerRequestList;
