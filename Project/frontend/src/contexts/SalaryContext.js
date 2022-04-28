import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

import SalaryAPI from "./api/SalaryAPI";

const SalaryContext = createContext();

export function SalaryProvider({ children }) {
	const [salaries, setSalries] = useState([]);

	// Get all salaries
	useEffect(() => {
		SalaryAPI.getSalaryData().then((response) => {
			setSalaries(response.data);
		});
	}, []);

	// Form initial state
	const form = useForm({
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
			setSalary([...salary, response.data]);
			form.reset();
		});
	};

	/*//Edit Salary
	const updateSalary = (values) => {
		let id = values.id;
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
		axios.put(`${baseURL}/${id}`, newSalary).then((res) => {
			axios.get(baseURL).then((res) => {
				setSalary(res.data);
			});
		});
	};*/

	return <SalaryContext.Provider value={{ salaries, addSalary, form }}>{children}</SalaryContext.Provider>;
}

export default SalaryContext;
