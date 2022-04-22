import React from "react";

// Page components
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

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

const AdminProfile = () => {
	return (
		<AdminProvider>
			<Profile />
		</AdminProvider>
	);
};

export { AdminDashboard, AdminLogin, AdminProfile };
