import React from "react";

// Page components
import Login from "./Login";
import Dashboard from "./Dashboard";

// AdminProvider
import { AdminProvider } from "../../contexts/AdminContext";

// const AdminRegister = () => {
// 	return (
// 		<AdminProvider>
// 			<AddAdmin />
// 		</AdminProvider>
// 	);
// };

const AdminLogin = () => {
	return (
		<AdminProvider>
			<Login />
		</AdminProvider>
	);
};

const AdminDashboard = () => {
	return (
		<AdminProvider>
			<Dashboard />
		</AdminProvider>
	);
};

export { AdminDashboard, AdminLogin };
