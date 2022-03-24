import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useModals } from '@mantine/modals';

const baseURL = `${process.env.REACT_APP_BACKEND_URL}/sample`;
const SampleContext = createContext();

export function SampleProvider({ children }) {
    const [samples, setSamples] = useState([]);

    // Get all samples
	useEffect(() => {
		axios.get(baseURL).then((res) => {
			setSamples(res.data);
		});
	}, []);

    // Form initial state
	const form = useForm({
		initialValues: {
			title: '',
			content: '',
		},
	});

	// Add new sample
	const addSample = (values) => {
		const newSample = {
			title: values.title,
			content: values.content,
		};
		axios.post(baseURL, newSample).then((res) => {
			setSamples([...samples, res.data]);
			form.reset();
		});
	};

	// Delete sample and update UI
	const deleteSample = (id) => {
		axios.delete(`${baseURL}/${id}`).then((res) => {
			setSamples(samples.filter((sample) => sample._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: 'Delete Sample',
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this sample? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: 'Delete sample', cancel: "No don't delete it" },
			confirmProps: { color: 'red' },
			onCancel: () => console.log('Cancel'),
			onConfirm: () => deleteSample(id),
		});

    return (
        <SampleContext.Provider value={{ samples, confirmDelete, addSample, form }}>
            {children}
        </SampleContext.Provider>
    );
}

export default SampleContext;