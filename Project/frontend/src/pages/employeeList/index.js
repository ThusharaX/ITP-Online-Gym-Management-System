import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

// Page components
import EmployeeTableScrollArea from "./EmployeeList";
import Search from "./Search";
import "./index.css";

// EmployeeProvider
import { EmployeeProvider } from "../../contexts/EmployeeContext";

const Employee_List = () => {
	return (
		<div>
			<div className="employee-form-container">
				<h1>Employee</h1>
			</div>
			<div>
				<Button style={{ marginLeft: 20 }}>
					<Link style={{ textDecoration: "none", color: "#fff" }} to="/employee-report">
						Employee Report
					</Link>
				</Button>
				<EmployeeProvider>
					{/*search employee */}
					<Search />
					{/* Get all Employees */}
					<EmployeeTableScrollArea />
				</EmployeeProvider>
			</div>
		</div>
	);
};

export { Employee_List };
