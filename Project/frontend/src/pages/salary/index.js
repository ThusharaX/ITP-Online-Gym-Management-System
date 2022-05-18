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
		<div>
			<div className="salary-form-container">
				<h1>Salary</h1>
			</div>
			<div className="salary-form-container">
				<SalaryProvider>
					{/* Add new Salary */}
					<AddSalary />
				</SalaryProvider>
			</div>
			<div className="salary-form-container">
				<SalaryProvider>
					{/* Search salary */}
					<Search />
					{/* Get all Salaries */}
					<SalaryTableScrollArea />
				</SalaryProvider>
			</div>
		</div>
	);
};

export { Salary };
