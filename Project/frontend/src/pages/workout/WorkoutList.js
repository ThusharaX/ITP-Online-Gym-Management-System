/* eslint-disable indent */
import React, { useContext, useState } from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal, ScrollArea } from "@mantine/core";
import WorkoutContext from "../../contexts/WorkoutContext";

import { Edit, Trash, Eye } from "tabler-icons-react";
import EditWorkout from "./EditWorkout";
import View from "./View";

function WorkoutList() {
	const { workouts, confirmDelete, editOpened, setEditOpened, setWorkout, incrementViewCount } =
		useContext(WorkoutContext);
	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	// View Modal
	const [opened, setOpened] = useState(false);

	return (
		<>
			{/* Edit Modal */}
			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Workout ">
				<EditWorkout />
			</Modal>

			{/* View Modal */}
			<Modal opened={opened} onClose={() => setOpened(false)} title="Workout Details" overflow="inside" size="5">
				<View />
			</Modal>

			{workouts.map((item) => (
				<div key={item._id} style={{ width: 340, margin: "auto" }}>
					<Card shadow="sm" p="lg">
						<Card.Section>
							<Image src={item.starting_position_img} height={160} alt="Norway" />
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>{item.workout_name}</Text>
							<Badge sx={{ paddingLeft: 5, paddingRight: 5 }} color="green" variant="light" size="lg">
								<Group position="center" spacing="xs">
									<Eye />
									{item.viewCount == 0 ? "0" : item.viewCount}
								</Group>
							</Badge>
						</Group>

						<ScrollArea style={{ height: 80 }} scrollbarSize={5} scrollHideDelay={100}>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								{item.instructions}
							</Text>
						</ScrollArea>

						<hr style={{ border: `1px solid ${secondaryColor}` }} />

						<ScrollArea style={{ height: 80 }} scrollbarSize={5} scrollHideDelay={100}>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								<i>Tips:</i> {item.tips}
							</Text>

							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								<i>Workout Category:</i> {item.workout_category}
							</Text>
							<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
								<i>Action:</i> {item.action}
							</Text>
						</ScrollArea>

						{/* On click open modal */}
						<Button
							variant="light"
							color="blue"
							fullWidth
							style={{ marginTop: 14 }}
							onClick={() => {
								incrementViewCount(item._id);
								setWorkout(item);
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
										setWorkout(item);
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

export default WorkoutList;
