import React from "react";

// Page components
import AddSalary from "./AddSalary";
import SalaryTableScrollArea from "./SalaryList";
import Search from "./Search";
import "./index.css";

// SalaryProvider
import { SalaryProvider } from "../../contexts/SalaryContext";

const Salary = () => {
	return (
		<>
			<div className="salary-form-container">
				<h1>Salary</h1>

				<SalaryProvider>
					{/* Add new Sample */}
					<Search />
					<AddSalary />
					{/* Get all Salaries */}
					<SalaryTableScrollArea />
				</SalaryProvider>
			</div>
		</>
	);
};

export { Salary };
