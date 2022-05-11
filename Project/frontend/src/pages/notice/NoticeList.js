import React, { useContext } from "react";
import { Button, Group, Modal, Box } from "@mantine/core";

import NoticeContext from "../../contexts/NoticeContext";
import EditNotice from "./EditNotice";
import AddNotice from "./AddNotice";

function NoticeList() {
	const { notices, confirmDelete, setEditOpened, setNotice, editOpened, setOpened, opened } = useContext(NoticeContext);

	return (
		<div>
			{/* Edit Modal */}
			<Modal opened={opened} onClose={() => setOpened(false)} title="Create Notice ">
				<AddNotice />
			</Modal>

			{/* Edit Modal */}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Notice ">
				<EditNotice />
			</Modal>

			{notices.map((item) => (
				<Box
					key={item._id}
					sx={(theme) => ({
						backgroundColor: "#cdd4cf",
						padding: theme.spacing.xl,
						borderRadius: theme.radius.md,
						cursor: "pointer",
						margin: 20,
						boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

						"&:hover": {
							backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
						},
					})}
				>
					<h2>{item.title}</h2>
					<hr color="Gray"></hr>
					<p>{item.content}</p>
					<br></br>
					<h4>{item.category}</h4>
					<Group position="right" mt="md" spacing="md">
						<Button
							onClick={() => {
								setNotice(item);
								setEditOpened(true);
							}}
							color="blue"
						>
							Edit
						</Button>
						<Button onClick={() => confirmDelete(item._id)} color="red">
							Delete
						</Button>
					</Group>
				</Box>
			))}
		</div>
	);
}

export default NoticeList;
