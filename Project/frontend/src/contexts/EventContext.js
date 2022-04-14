import { createContext, useState, useEffect } from "react";

import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";
const baseURL = `${process.env.REACT_APP_BACKEND_URL}/events`;
const EventContext = createContext();

export function EventProvider({ children }) {
	const [events, setEvents] = useState([]);

	// Get all events
	useEffect(() => {
		axios.get(baseURL).then((res) => {
			setEvents(res.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			title: "Cat doing weights",
			tags: "cattower,lasers",
			description:
				"Cats love climbing and hiding, and can have hours of fun on a cat tree, a simple cardboard box, or a tunnel – not only does it encourage them to play, it also provides them with some space of their own!",
			details: "noon to midnight",
			gender: "Both",
			date: new Date(),
			time: new Date(),
			trainer: "6238afed94d1c551735ca084",
		},
	});

	// Add new event
	const addEvent = (values) => {
		let newDate = String(values.date).slice(0, 15) + String(values.time).slice(15);
		const newEvent = {
			title: values.title,
			description: values.description,
			details: values.details,
			gender: values.gender,
			date: newDate,
			tags: values.tags.split(","),
			trainer: values.trainer,
		};
		axios.post(baseURL, newEvent).then((res) => {
			setEvents([...events, res.data]);
			form.reset();
		});
	};

	// Delete event and update UI
	const deleteEvent = (id) => {
		axios.delete(`${baseURL}/${id}`).then((res) => {
			setEvents(events.filter((event) => event._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Event",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this event? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete event", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			onCancel: () => {
				let x = 5;
			},
			// onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteEvent(id),
		});

	return <EventContext.Provider value={{ events, confirmDelete, addEvent, form }}>{children}</EventContext.Provider>;
}

export default EventContext;
