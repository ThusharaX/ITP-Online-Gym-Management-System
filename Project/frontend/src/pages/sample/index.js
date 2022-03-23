import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, TextInput, Group, Box, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useModals } from '@mantine/modals';

const baseURL = `${process.env.REACT_APP_BACKEND_URL}/sample`;

const Sample = () => {

	const [sample, setSample] = useState([]);

	// Get all samples when component mounts
	useEffect(() => {
		axios.get(baseURL).then((res) => {
			setSample(res.data);
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
			setSample([...sample, res.data]);
			form.reset();
		});
	};

	// Delete sample and update UI
	const deleteSample = (id) => {
		axios.delete(`${baseURL}/${id}`).then((res) => {
			setSample(sample.filter((sample) => sample._id !== id));
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
		<div>
			<h1>Sample Page</h1>

			{/* Display all samples */}
			<ul>
				{sample.map((item) => (
					<li key={item._id}>
						<h2>{item.title}</h2>
						<p><strong>ID:</strong> {item._id} | <strong>Content:</strong> {item.content}</p>
						<Button onClick={() => confirmDelete(item._id)} color="red" compact>Delete</Button>
					</li>
				))}
			</ul>

			{/* Add new Sample */}
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => addSample(values))}>
					<TextInput
						required
						label="Title"
						placeholder="Sample Title"
						{...form.getInputProps('title')}
					/>
					<TextInput
						required
						label="Content"
						placeholder="Sample Content"
						{...form.getInputProps('content')}
					/>

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>

		</div>
	)
}

export default Sample