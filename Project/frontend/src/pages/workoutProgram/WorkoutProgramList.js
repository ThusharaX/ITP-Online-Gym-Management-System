import React, { useContext } from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from "@mantine/core";
import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

import { Edit, Trash } from "tabler-icons-react";
import EditWorkoutProgram from "./EditWorkoutProgram";

import WorkoutProgramSkeleton from "./WorkoutProgramSkeleton";

function WorkoutProgramList() {
	const {
		workoutPrograms,
		confirmDelete,
		editOpened,
		setEditOpened,
		setWorkoutProgram,
		enrollWorkoutProgram,
		unenrollWorkoutProgram,
		enrolledWorkoutPrograms,
		enrollButtonDisabled,
		setEnrollButtonDisabled,
		isLoading,
	} = useContext(WorkoutProgramContext);

	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

	return (
		<>
			{isLoading ? <WorkoutProgramSkeleton isLoading={isLoading} /> : <></>}

			<Modal opened={editOpened} onClose={() => setEditOpened(false)} title="Edit Workout Program">
				<EditWorkoutProgram />
			</Modal>

			{workoutPrograms.map((item) => (
				<div key={item._id} style={{ width: 340, margin: "auto" }}>
					<Card shadow="sm" p="lg">
						<Card.Section>
							<Image src={item.photoURL} height={160} alt="Norway" />
						</Card.Section>

						<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
							<Text weight={500}>{item.name}</Text>
							<Badge color="green" variant="light" size="lg">
								Rs. {item.fee}/=
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

						{!enrolledWorkoutPrograms.includes(item._id) ? (
							<Button
								disabled={enrollButtonDisabled}
								variant="light"
								color="blue"
								fullWidth
								style={{ marginTop: 14 }}
								onClick={() => {
									enrollWorkoutProgram(item._id);
									setEnrollButtonDisabled(true);
								}}
							>
								Enroll Now
							</Button>
						) : (
							<Button
								disabled={enrollButtonDisabled}
								variant="light"
								color="red"
								fullWidth
								style={{ marginTop: 14 }}
								onClick={() => {
									unenrollWorkoutProgram(item._id);
									setEnrollButtonDisabled(true);
								}}
							>
								Unenroll
							</Button>
						)}

						{localStorage.getItem("permissionLevel") === "ADMIN" && (
							<Group position="apart" mt="md" spacing="md">
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
