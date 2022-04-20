import React from "react";

// Page components
import AddNotice from "./AddNotice";

// Notice Provider
import { NoticeProvider } from "../../contexts/NoticeContext";
import NoticeList from "./NoticeList";

const Notice = () => {
	return (
		<div>
			<h1 style={{ color: "red" }}>Notices</h1>

			<NoticeProvider>
				<NoticeList />
				{/* Add new Notice */}
				<AddNotice />
			</NoticeProvider>
		</div>
	);
};

export default Notice;
