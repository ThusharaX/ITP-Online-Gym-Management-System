import { createContext, useState, useEffect } from "react";

// Mantine imports
import { useForm } from "@mantine/form";
import SalaryAPI from "./api/SalaryAPI";
const SalaryContext = createContext();

export function SalaryProvider({ children }) {
	//Salaries
	const [salaries, setSalaries] = useState([]);

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
			}}
		>
			{children}
		</SalaryContext.Provider>
	);
}

export default SalaryContext;
