import React from "react";

// Page components
import AddNotice from "./AddNotice";

// Notice Provider
import { NoticeProvider } from "../../contexts/NoticeContext";
import NoticeList from "./NoticeList";
import "./index.css";

const Notice = () => {
	return (
		<>
			<div className="notice-form-container">
				<h1 style={{ color: "red" }}>Notices</h1>

				<NoticeProvider>
					{/* Add new Notice */}
					<AddNotice />
				</NoticeProvider>
			</div>
			<div>
				<NoticeProvider>
					<NoticeList />
				</NoticeProvider>
			</div>
		</>
	);
};

export default Notice;
