import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
// Page components
import EventList from "./eventCard";
import ReactCard from "./ReactCard";

// SampleProvider
import { EventProvider } from "../../contexts/EventContext";

const Eventlist = () => {
	return (
		<EventProvider>
			<EventList />
		</EventProvider>
	);
};

const Events = () => {
	return (
		<EventProvider>
			<NotificationsProvider>
				<ReactCard />
			</NotificationsProvider>
		</EventProvider>
	);
};

export { Events, Eventlist };
