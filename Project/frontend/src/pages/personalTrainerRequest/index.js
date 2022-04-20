import { useState } from "react";
import "./sty.css";
import FormInput from "../../components/formInput/FormInput";
//import LightDarkButton from "../../components/lightDarkButton/LightDarkButton";

const PersonalTrainerRequest = () => {
	const [values, setValues] = useState({
		name: "",
		perTrainer: "",
		timeSlot: "",
		trainDay: "",
		package: "",
		status: "",
		// username: "",
		// email: "",
		// birthday: "",
		// password: "",
		// confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeholder: "Name",
			errorMessage: "Name should be 3-10 characters and shouldn't include any special character!",
			label: "Name",
			pattern: "^[A-Za-z0-9]{3,10}$",
			required: true,
		},
		{
			id: 2,
			name: "perTrainer",
			type: "text",
			placeholder: "Personal Trainer Name",
			errorMessage: "Personal Trainer name should be 3-10 characters and shouldn't include any special character!",
			label: "Personal Trainer Name",
			pattern: "^[A-Za-z0-9]{3,10}$",
			required: true,
		},
		{
			id: 3,
			name: "timeSlot",
			type: "text",
			placeholder: "Time Slot",
			errorMessage: "It should be a between 8.00 a.m - 9.00p.m!",
			label: "Time Slot",
			required: true,
		},
		{
			id: 4,
			name: "trainDay",
			type: "date",
			placeholder: "Train Day",
			label: "Train Day",
		},
		{
			id: 5,
			name: "package",
			type: "text",
			placeholder: "Package",
			errorMessage: "It should be a valid package!",
			label: "Package",
			required: true,
		},
		{
			id: 6,
			name: "status",
			type: "text",
			placeholder: "Status",
			errorMessage: "It should be pending!",
			label: "Status",
			required: true,
		},
		// {
		// 	id: 4,
		// 	name: "password",
		// 	type: "password",
		// 	placeholder: "Password",
		// 	errorMessage:
		// 		"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
		// 	label: "Password",
		// 	pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
		// 	required: true,
		// },
		// {
		// 	id: 5,
		// 	name: "confirmPassword",
		// 	type: "password",
		// 	placeholder: "Confirm Password",
		// 	errorMessage: "Passwords don't match!",
		// 	label: "Confirm Password",
		// 	pattern: values.password,
		// 	required: true,
		// },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="app">
			<form onSubmit={handleSubmit}>
				<h1>Create Request</h1>
				{inputs.map((input) => (
					<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
				))}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default PersonalTrainerRequest;
