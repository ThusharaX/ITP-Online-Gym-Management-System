/* eslint-disable indent */
import React, { useContext, useState } from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from "@mantine/core";
import BlogContext from "../../contexts/BlogContext";

import { Edit, Trash, Eye } from "tabler-icons-react";
import EditBlog from "./EditBlog";
import View from "./View";

function BlogList() {
	const { blogs, confirmDelete, editOpened, setEditOpened, setBlog, incrementViewCount } = useContext(BlogContext);
	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	// View Modal
	const [opened, setOpened] = useState(false);

	return (
		<>
			{/* Edit Modal */}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Blog ">
				<EditBlog />
			</Modal>

			{/* View Modal */}
			<Modal opened={opened} onClose={() => setOpened(false)} title="Blog Details" overflow="inside" size="5">
				<View />
			</Modal>

			{blogs.map((item) => (
				<div key={item._id} style={{ width: 340, margin: "auto" }}>
					<Card shadow="sm" p="lg">
						{/* <Card.Section>
							<Image src={item.starting_position_img} height={160} alt="Norway" />
						</Card.Section> */}

						{/* <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>{item.workout_name}</Text>
							<Badge sx={{ paddingLeft: 10, paddingRight: 10 }} color="green" variant="light" size="lg">
								<Group position="center" spacing="xs">
									<Eye />
									{item.viewCount == 0 ? "0" : item.viewCount}
								</Group>
							</Badge>
						</Group> */}

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Trainer Name : {item.trname}
						</Text>
						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Title : {item.title}
						</Text>

						{/* <hr style={{ border: `1px solid ${secondaryColor}` }} /> */}

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Description : {item.description}
						</Text>
						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Phone Number : {item.wNum}
						</Text>

						{/* On click open modal */}
						<Button
							variant="light"
							color="blue"
							fullWidth
							style={{ marginTop: 14 }}
							onClick={() => {
								setBlog(item);
								setOpened(true);
							}}
						>
							View
						</Button>

						{localStorage.getItem("permissionLevel") === "ADMIN" ||
						localStorage.getItem("permissionLevel") === "TRAINER" ? (
							<Group position="apart" mt="md" spacing="md">
								<Button
									onClick={() => {
										setBlog(item);
										setEditOpened(true);
									}}
									variant="light"
									color="blue"
									compact
									leftIcon={<Edit size={16} />}
								>
									Edit
								</Button>
								<Button onClick={() => confirmDelete(item._id)} color="red" compact leftIcon={<Trash size={16} />}>
									Delete
								</Button>
							</Group>
						) : (
							<p></p>
						)}
					</Card>
				</div>
			))}
		</>
	);
}

export default BlogList;
