import React from "react";

// Page Components
import PersonalTrainerRequestList from "./PersonalTrainerRequestList";
import Search from "./Search";

// PersonalTrainerRequest Provider
import { PersonalTrainerRequestProvider } from "../../contexts/PersonalTrainerRequestContext";
import { NotificationsProvider } from "@mantine/notifications";

const RList = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Personal Trainer Requests</h1>

			<NotificationsProvider>
				<PersonalTrainerRequestProvider>
					<Search />
					<PersonalTrainerRequestList />
				</PersonalTrainerRequestProvider>
			</NotificationsProvider>
		</div>
	);
};

export default RList;