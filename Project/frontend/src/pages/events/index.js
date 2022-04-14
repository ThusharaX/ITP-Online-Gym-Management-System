// import { Title } from "@mantine/core";
import React from "react";

// Page components
import EventList from "./eventCard";
import AddEvent from "./AddEvent";

// SampleProvider
import { EventProvider } from "../../contexts/EventContext";

// let events = [
//   {
//     img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     description:
//       "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
//     title: "Norway Fjord Adventures",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     description:
//       "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
//     title: "Norway Fjord Adventures",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     description:
//       "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
//     title: "Norway Fjord Adventures",
//   },
// ];

//{onClick={()=>clickHandler(data)} } //to call function from onclick with data

const Events = () => {
	return (
		<>
			<div
				style={{
					display: "table",
					borderCollapse: "separate",
					borderSpacing: "50px",
				}}
			>
				<EventProvider>
					{/* Event list */}
					<EventList />
					<AddEvent />
					{/* Add new Sample */}
					{/* <AddEvent /> */}
				</EventProvider>

				{/* {events.map((event) => {
          return <EventList {...event} />;
        })} */}
			</div>
			<h1>Sample Page</h1>
		</>
	);
};

export default Events;
