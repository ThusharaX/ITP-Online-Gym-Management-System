import React, { useState, useContext } from "react";
import { createStyles, Table, ScrollArea, ActionIcon, Modal, Button } from "@mantine/core";
import FeedbackContext from "../../contexts/FeedbackContext";
import { Pencil } from "tabler-icons-react";
import EditFeedback from "./EditFeedback";

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

function FeedbackTableScrollArea() {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);
	const { feedbacks, setFeedback, setEditOpened, editOpened, confirmDelete } = useContext(FeedbackContext);

	const rows = feedbacks.map((row) => (
		// email: {
		// 	type: String,
		// 	required: true,
		// },
		// displayname: {
		// 	type: String,
		// 	required: true,
		// },
		// ftitle: {
		// 	type: String,
		// 	required: true,
		// },
		// feedback: {
		// 	type: String,
		// 	required: true,
		// },

		<tr key={row._id}>
			<td>{row._id}</td>
			<td>{row.email}</td>
			<td>{row.displayname}</td>
			<td>{row.ftitle}</td>
			<td>{row.feedback}</td>
			<td>
				<ActionIcon color={"blue"}>
					<Pencil
						size={16}
						onClick={() => {
							setFeedback(row);
							setEditOpened(true);
						}}
					/>
				</ActionIcon>
				{/* <Button onClick={() => confirmDelete(item._id)} color="red" compact>
					Delete
				</Button> */}
			</td>
		</tr>
	));

	return (
		<>
			{/*Edit Feedback Modal*/}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Feedback">
				<EditFeedback />
			</Modal>

			<ScrollArea sx={{ height: 600 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
				<Table sx={{ minWidth: 700, margin: 20 }}>
					<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
						{/* <tr>id,email,name,title,content */}
						<tr>
							<th>id</th>
							<th>email</th>
							<th>name</th>
							<th>ftitle</th>
							<th>feedback</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
		</>
	);
}

export default FeedbackTableScrollArea;
