import React, { useContext } from "react";
import { Button } from "@mantine/core";

import SampleContext from "../../contexts/SampleContext";

const SampleList = () => {
	const { samples, confirmDelete } = useContext(SampleContext);

	return (
		<>
			<ul>
				{samples.map((item) => (
					<li key={item._id}>
						<h2>{item.title}</h2>
						<p>
							<strong>ID:</strong> {item._id} | <strong>Content:</strong> {item.content}
						</p>
						<Button onClick={() => confirmDelete(item._id)} color="red" compact>
							Delete
						</Button>
					</li>
				))}
			</ul>
		</>
	);
};

export default SampleList;
