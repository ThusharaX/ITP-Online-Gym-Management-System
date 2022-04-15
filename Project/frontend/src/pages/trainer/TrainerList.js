import React, { useContext } from "react";
import { Button, Paper } from "@mantine/core";

import TrainerContext from "../../contexts/TrainerContext";

const TrainerList = () => {
	const { trainers, confirmDelete } = useContext(TrainerContext);

	return (
		<>
			{/* body color light yellow */}
			<style jsx>
				{`
					body {
						background-color: #f5f5f5;
					}
				`}
			</style>

			<ul>
				{trainers.map((item) => (
					<div key={item._id}>
						<Paper shadow="lg" radius="lg" p="md" withBorder>
							<img src={item.photoURL} alt={item.name} />
							<li>
								<div>
									<h3>{item.name}</h3>
									<p>{item.description}</p>
									<p>{item.conducted_by}</p>
									<p>{item.fee}</p>
									<p>{item.day}</p>
									<p>{item.time}</p>
								</div>
								<Button onClick={() => confirmDelete(item._id)} color="red" compact>
									Delete
								</Button>
							</li>
						</Paper>
						<br />
					</div>
				))}
			</ul>
		</>
	);
};

export default TrainerList;
