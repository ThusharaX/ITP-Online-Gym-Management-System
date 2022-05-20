import React from "react";
import "./sty.css";
import Main from "../../components/main/Main";
import { NotificationsProvider } from "@mantine/notifications";
// Page Components

import AddPersonalTrainerRequest from "./AddPersonalTrainerRequest";

// Request Provider
import { PersonalTrainerRequestProvider } from "../../contexts/PersonalTrainerRequestContext";

const Request = () => {
	return (
		<div>
			{/* <h1 style={{ textAlign: "center" }}>Create Personal Trainer Request</h1> */}
			<NotificationsProvider>
				<PersonalTrainerRequestProvider>
					<Main />
				</PersonalTrainerRequestProvider>
			</NotificationsProvider>
		</div>
	);
};

export default Request;

// import { useState } from "react";
// import "./sty.css";
// import FormInput from "../../components/formInput/FormInput";
// //import LightDarkButton from "../../components/lightDarkButton/LightDarkButton";

// const PersonalTrainerRequest = () => {
// 	const [values, setValues] = useState({
// 		name: "",
// 		perTrainer: "",
// 		timeSlot: "",
// 		trainDay: "",
// 		package: "",
// 		status: "",
// 		// username: "",
// 		// email: "",
// 		// birthday: "",
// 		// password: "",
// 		// confirmPassword: "",
// 	});

// 	const inputs = [
// 		{
// 			id: 1,
// 			name: "name",
// 			type: "text",
// 			placeholder: "Name",
// 			errorMessage: "Name should be 3-10 characters and shouldn't include any special character!",
// 			label: "Name",
// 			pattern: "^[A-Za-z0-9]{3,10}$",
// 			required: true,
// 		},
// 		{
// 			id: 2,
// 			name: "perTrainer",
// 			type: "text",
// 			placeholder: "Personal Trainer Name",
// 			errorMessage: "Personal Trainer name should be 3-10 characters and shouldn't include any special character!",
// 			label: "Personal Trainer Name",
// 			pattern: "^[A-Za-z0-9]{3,10}$",
// 			required: true,
// 		},
// 		{
// 			id: 3,
// 			name: "timeSlot",
// 			type: "text",
// 			placeholder: "Time Slot",
// 			errorMessage: "It should be a between 8.00 a.m - 9.00p.m!",
// 			label: "Time Slot",
// 			required: true,
// 		},
// 		{
// 			id: 4,
// 			name: "trainDay",
// 			type: "date",
// 			placeholder: "Train Day",
// 			label: "Train Day",
// 		},
// 		{
// 			id: 5,
// 			name: "package",
// 			type: "text",
// 			placeholder: "Package",
// 			errorMessage: "It should be a valid package!",
// 			label: "Package",
// 			required: true,
// 		},
// 		{
// 			id: 6,
// 			name: "status",
// 			type: "text",
// 			placeholder: "Status",
// 			errorMessage: "It should be pending!",
// 			label: "Status",
// 			required: true,
// 		},

// 	];

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<div className="app">
// 			<form className="forms" onSubmit={handleSubmit}>
// 				<h1 className="toph">Create Request</h1>
// 				{inputs.map((input) => (
// 					<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
// 				))}
// 				<button className="btn">Submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default PersonalTrainerRequest;
