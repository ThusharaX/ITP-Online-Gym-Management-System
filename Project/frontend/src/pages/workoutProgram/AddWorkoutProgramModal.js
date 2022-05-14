import { useContext } from "react";
import { Modal, Button, Group } from "@mantine/core";

// Page Components
import AddWorkoutProgram from "./AddWorkoutProgram";

import WorkoutProgramContext from "../../contexts/WorkoutProgramContext";

function AddWorkoutModal() {
	const { opened, setOpened } = useContext(WorkoutProgramContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Workout Program">
				<AddWorkoutProgram />
			</Modal>

			<Group position="right" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
				{localStorage.getItem("permissionLevel") === "ADMIN" && (
					<Button onClick={() => setOpened(true)}>Add Workout Program</Button>
				)}
			</Group>
		</>
	);
}

export default AddWorkoutModal;
