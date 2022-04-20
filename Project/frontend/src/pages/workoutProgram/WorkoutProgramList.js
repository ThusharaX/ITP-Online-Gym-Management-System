import React, { useContext } from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from "@mantine/core";
import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

import { Edit, Trash } from "tabler-icons-react";
import EditWorkoutProgram from "./EditWorkoutProgram";

function WorkoutProgramList() {
	const { workoutPrograms, confirmDelete, editOpened, setEditOpened, setWorkoutProgram } =
		useContext(WorkoutProgramContext);
	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
			{workoutPrograms.map((item) => (
				<div key={item._id} style={{ width: 340, margin: "auto" }}>
					<Card shadow="sm" p="lg">
						<Card.Section>
							<Image src={item.photoURL} height={160} alt="Norway" />
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>{item.name}</Text>
							<Badge color="green" variant="light">
								{item.fee}/=
							</Badge>
						</Group>

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							{item.description}
						</Text>

						<hr style={{ border: `1px solid ${secondaryColor}` }} />

						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Conducted by: {item.conducted_by}
						</Text>
						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Day: {item.day}
						</Text>
						<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
							Time: {item.time}
						</Text>

						<Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
							Enroll Now
						</Button>

						{localStorage.getItem("permissionLevel") === "ADMIN" && (
							<Group position="apart" mt="md" spacing="md">
								<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Workout Program">
									<EditWorkoutProgram />
								</Modal>
								<Button
									onClick={() => {
										setWorkoutProgram(item);
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
						)}
					</Card>
				</div>
			))}
		</>
	);
}

export default WorkoutProgramList;