import { createContext, useState, useEffect } from "react";

// Mantine imports
import { useForm, joiResolver } from "@mantine/form";
import SalaryAPI from "./api/SalaryAPI";

import Joi from "joi";

const SalaryContext = createContext();

export function SalaryProvider({ children }) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	//Salaries
	const [salaries, setSalaries] = useState([]);

	// Form Validation
	const schema = Joi.object({
		nic: Joi.string().max(12).message("NIC should be 12 characters").required(),
		year: Joi.number().min(1000).message("Year should be include 4 numbers").required(),
		month: Joi.string()
			.valid(...months)
			.required(),
		basicSalary: Joi.number().required(),
		otHours: Joi.number().required(),
		otRate: Joi.number().required(),
		otTotal: Joi.number().required(),
		totalSalary: Joi.number().required(),
	});

	// Salary
	const [salary, setSalary] = useState({
		nic: "",
		year: "",
		month: "",
		basicSalary: "",
		otHours: "",
		otRate: "",
		otTotal: "",
		totalSalary: "",
	});

	// Get all salaries
	useEffect(() => {
		SalaryAPI.getSalaryData().then((response) => {
			setSalaries(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			nic: "",
			year: "",
			month: "",
			basicSalary: "",
			otHours: "",
			otRate: "",
			otTotal: "",
			totalSalary: "",
		},
	});

	// Add new salary
	const addSalary = (values) => {
		const newSalary = {
			nic: values.nic,
			year: values.year,
			month: values.month,
			basicSalary: values.basicSalary,
			otHours: values.otHours,
			otRate: values.otRate,
			otTotal: values.otTotal,
			totalSalary: values.totalSalary,
		};
		SalaryAPI.addSalary(newSalary).then((response) => {
			setSalaries([...salaries, response.data]);
			form.reset();
		});
	};

	//Add Salary Modal
	const [opened, setOpened] = useState(false);

	//Edit Salary
	const editSalary = (values) => {
		const newSalary = {
			nic: values.nic,
			year: values.year,
			month: values.month,
			basicSalary: values.basicSalary,
			otHours: values.otHours,
			otRate: values.otRate,
			otTotal: values.otTotal,
			totalSalary: values.totalSalary,
		};
		SalaryAPI.editSalary(values.id, newSalary).then((response) => {
			setSalaries(salaries.map((salary) => (salary._id === values.id ? response.data : salary)));
			form.reset();
		});
	};

	//Edit Salary Modal
	const [editOpened, setEditOpened] = useState(false);

	return (
		<SalaryContext.Provider
			value={{
				salaries,
				salary,
				addSalary,
				form,
				editSalary,
				setSalaries,
				setSalary,
				setEditOpened,
				editOpened,
				opened,
				setOpened,
				schema,
				months,
			}}
		>
			{children}
		</SalaryContext.Provider>
	);
}

export default SalaryContext;
