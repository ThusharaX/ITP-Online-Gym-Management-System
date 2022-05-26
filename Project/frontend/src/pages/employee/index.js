import React from "react";

// Page components
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

//EmployeeProvider
import { EmployeeProvider } from "../../contexts/EmployeeContext";

const EmployeeLogin = () => {
	return (
		<EmployeeProvider>
			<Login />
		</EmployeeProvider>
	);
};

const EmployeeDashboard = () => {
	return (
		<EmployeeProvider>
			<Dashboard />
		</EmployeeProvider>
	);
};

const EmployeeProfile = () => {
	return (
		<EmployeeProvider>
			<Profile />
		</EmployeeProvider>
	);
};

export { EmployeeDashboard, EmployeeLogin, EmployeeProfile };
