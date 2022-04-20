import { useContext } from "react";
import { Modal, Button, Group } from "@mantine/core";

// Page Components
import AddWorkout from "./AddWorkout";

import WorkoutContext from "../../contexts/WorkoutContext";

function AddWorkoutModal() {
	const { opened, setOpened } = useContext(WorkoutContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Workout">
				<AddWorkout />
			</Modal>

			{localStorage.getItem("permissionLevel") === "ADMIN" || localStorage.getItem("permissionLevel") === "TRAINER" ? (
				<Group position="right" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
					<Button onClick={() => setOpened(true)}>Add Workout</Button>
				</Group>
			) : (
				<p></p>
			)}
		</>
	);
}

export default AddWorkoutModal;
