import { useState } from "react";
import "./sty.css";
import FormInput from "../../components/formInput/FormInput";

const BlogCreateRequest = () => {
	const [values, setValues] = useState({
		trainerName: "",
		title: "",
		description: "",
		fb: "",
		phoneNum: "",
		email: "",
	});

	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeholder: "Name",
			errorMessage: "Name should be 3-10 characters and shouldn't include any special character!",
			label: "Trainer's Name",
			pattern: "^[A-Za-z0-9]{3,10}$",
			required: true,
		},
		{
			id: 2,
			name: "title",
			type: "text",
			placeholder: "Title",
			label: "Title",
			errorMessage: "Username should be 2-3 characters and shouldn't include any special character!",
			pattern: "^[A-Za-z0-9]{2,3}$",
			required: true,
		},
		{
			id: 3,
			name: "description",
			type: "text",
			placeholder: "Description",
			errorMessage: "It should be 10-30 characters and shouldn't include any special character!",
			label: "Description",
			pattern: "^[A-Za-z0-9]{10,30}$",
			required: true,
		},
		{
			id: 4,
			name: "fb",
			type: "text",
			placeholder: "Facebook",
			errorMessage: "It should be a valid facebook profile name!",
			label: "Facebook",
			required: true,
		},
		{
			id: 5,
			name: "phoneNum",
			type: "text",
			placeholder: "Phone Number",
			errorMessage: "It should be a valid Phone Number Starting with 0!",
			label: "Phone Number",
			required: true,
		},
		{
			id: 6,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "It should be a valid email address!",
			label: "Email",
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="app">
			<form className="forms" onSubmit={handleSubmit}>
				<h1 className="toph">Create Blog</h1>
				{inputs.map((input) => (
					<FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
				))}
				<button className="btn">Submit</button>
			</form>
		</div>
	);
};

export default BlogCreateRequest;
