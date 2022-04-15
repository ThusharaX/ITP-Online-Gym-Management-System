import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import AddEvent from "./AddEvent";
function EventModel() {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
				<div
					style={{
						backgroundColor: "",
						margin: "-40px",
						borderRadius: "53px",
						border: "3px solid #ccc",
						width: "548px",
					}}
				>
					<AddEvent />
				</div>
			</Modal>

			<Group position="center">
				<Button size="md" onClick={() => setOpened(true)} compact variant="light" color="blue">
					Update
				</Button>
			</Group>
		</>
	);
}
export default EventModel;
