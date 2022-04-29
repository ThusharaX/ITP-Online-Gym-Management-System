import { useContext } from "react";
import { Modal, Button, Group } from "@mantine/core";

// Page Components
import AddBlog from "./AddBlog";

import BlogContext from "../../contexts/BlogContext";

function AddBlogModal() {
	const { opened, setOpened } = useContext(BlogContext);

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Blog">
				<AddBlog />
			</Modal>

			{localStorage.getItem("permissionLevel") === "ADMIN" || localStorage.getItem("permissionLevel") === "TRAINER" ? (
				<Group position="right" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
					<Button onClick={() => setOpened(true)}>Add Blog</Button>
				</Group>
			) : (
				<p></p>
			)}
		</>
	);
}

export default AddBlogModal;
