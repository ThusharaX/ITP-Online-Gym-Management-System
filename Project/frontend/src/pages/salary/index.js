import React from "react";

// Page components
import AddSalary from "./AddSalary";
import SalaryTableScrollArea from "./SalaryList";
import Search from "./Search";
import "./index.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

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
				{localStorage.getItem("permissionLevel") === "ADMIN" && (
					<Button sx={{ width: 150, margin: 20 }}>
						<Link style={{ textDecoration: "none", color: "#fff" }} to="/salary-report">
							Salary Report
						</Link>
					</Button>
				)}
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
