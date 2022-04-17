import React from "react";

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
			<ReactCard />
		</EventProvider>
	);
};

export { Events, Eventlist };
