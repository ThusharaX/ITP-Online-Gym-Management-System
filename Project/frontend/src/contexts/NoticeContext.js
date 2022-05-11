import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import NoticeAPI from "./api/NoticeAPI";

const NoticeContext = createContext();

export function NoticeProvider({ children }) {
	const [notices, setNotices] = useState([]);

	const [notice, setNotice] = useState({
		title: "",
		content: "",
		category: "",
	});

	// Get all Notices
	useEffect(() => {
		NoticeAPI.getNoticeData().then((response) => {
			setNotices(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			title: "",
			content: "",
			category: "",
		},
	});

	// Add new Notice
	const addNotice = (values) => {
		const newNotice = {
			title: values.title,
			content: values.content,
			category: values.category,
		};
		NoticeAPI.addNotice(newNotice).then((response) => {
			setNotices([...notices, response.data]);
			form.reset();
		});
	};

	// Add Notice Modal
	const [opened, setOpened] = useState(false);

	// Delete Notice and update UI
	const deleteNotice = (id) => {
		NoticeAPI.deleteNotice(id).then(() => {
			setNotices(notices.filter((notice) => notice._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Notice",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this Notice? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete notice", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteNotice(id),
		});

	//Edit Notice and update UI
	const editNotice = (values) => {
		const newNotice = {
			title: values.title,
			content: values.content,
			category: values.category,
		};
		NoticeAPI.editNotice(values.id, newNotice).then((response) => {
			setNotices(notices.map((notice) => (notice._id === values.id ? response.data : notice)));
			form.reset();
		});
	};

	// edit Notice Modal
	const [editOpened, setEditOpened] = useState(false);

	return (
		<NoticeContext.Provider
			value={{
				notices,
				notice,
				opened,
				setOpened,
				editOpened,
				setEditOpened,
				confirmDelete,
				addNotice,
				editNotice,
				setNotice,
				setNotices,
				form,
			}}
		>
			{children}
		</NoticeContext.Provider>
	);
}

export default NoticeContext;
