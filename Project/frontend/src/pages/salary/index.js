import React from "react";

// Page components
import AddSalary from "./AddSalary";

// SalaryProvider
import { SalaryProvider } from "../../contexts/SalaryContext";

const Salary = () => {
	return (
		<div>
			<h1>Salary</h1>

			<SalaryProvider>
				{/* Add new Sample */}
				<AddSalary />
			</SalaryProvider>
		</div>
	);
};

export default Salary;
