import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import SampleAPI from "./api/SampleAPI";

const SampleContext = createContext();

export function SampleProvider({ children }) {
	const [samples, setSamples] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// Get all samples
	useEffect(() => {
		setIsLoading(true);
		SampleAPI.getSampleData().then((response) => {
			setSamples(response.data);
			setIsLoading(false);
		});
	}, []);

	// Form initial state
	const form = useForm({
		initialValues: {
			title: "",
			content: "",
		},
	});

	// Add new sample
	const addSample = (values) => {
		setIsLoading(true);
		const newSample = {
			title: values.title,
			content: values.content,
		};
		SampleAPI.addSample(newSample).then((response) => {
			setSamples([...samples, response.data]);
			form.reset();
			setIsLoading(false);
		});
	};

	// Delete sample and update UI
	const deleteSample = (id) => {
		SampleAPI.deleteSample(id).then(() => {
			setSamples(samples.filter((sample) => sample._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Sample",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this sample? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete sample", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteSample(id),
		});

	return (
		<SampleContext.Provider value={{ samples, confirmDelete, addSample, form, isLoading }}>
			{children}
		</SampleContext.Provider>
	);
}

export default SampleContext;
