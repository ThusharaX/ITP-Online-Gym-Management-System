import React from "react";

// Page components
import AddSalary from "./AddSalary";
import EditSalary from "./EditSalary";
import "./index.css";

// SalaryProvider
import { SalaryProvider } from "../../contexts/SalaryContext";

const Salary = () => {
	return (
		<div className="salary-form-container">
			<h1>Salary</h1>

			<SalaryProvider>
				{/* Add new Sample */}
				<AddSalary />
			</SalaryProvider>
		</div>
	);
};

export { Salary };
