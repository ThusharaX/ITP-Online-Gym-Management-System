import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import EditEvent from "./EditEvent";
function EventModel() {
	// const [opened, setOpened] = useState(false);

	return (
		<>
			{/* <Modal
				opened={opened}
				onClose={() => setOpened(false)}
				withCloseButton={false}
				transition="fade"
				transitionDuration={600}
				transitionTimingFunction="ease"
			>
				<div
					style={{
						backgroundColor: "",
						margin: "-40px",
						borderRadius: "53px",
						border: "3px solid #ccc",
						width: "548px",
					}}
				> */}
			<EditEvent />
			{/* <Button onClick={() => setOpened(false)} color={"red"} type="button" radius="10px" size="xl" compact>
						Cancel
					</Button> */}
			{/* </div>
			</Modal> */}
		</>
	);
}
export default EventModel;
