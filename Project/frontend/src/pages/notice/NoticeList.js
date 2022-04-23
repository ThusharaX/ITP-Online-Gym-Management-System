import React, { useContext } from "react";
import { Button } from "@mantine/core";

import NoticeContext from "../../contexts/NoticeContext";

const NoticeList = () => {
	const { notices, confirmDelete } = useContext(NoticeContext);

	return (
		<div className="notice">
			<ul>
				{notices.map((item) => (
					<li key={item._id}>
						<h2>{item.title}</h2>
						<h3>{item.category}</h3>
						<p>{item.content}</p>
						<Button onClick={() => confirmDelete(item._id)} color="red" compact>
							Delete
						</Button>
						<Button onClick={() => confirmEdit(item._id)} color="blue" compact>
							Edit
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoticeList;
