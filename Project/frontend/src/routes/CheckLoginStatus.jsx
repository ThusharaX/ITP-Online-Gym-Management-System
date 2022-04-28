import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");

	if (permissionLevel === "ADMIN") {
		return <Navigate to="/admin" />;
	}
	if (permissionLevel === "TRAINER") {
		return <Navigate to="/trainers" />;
	}
	if (permissionLevel === "MEMBER") {
		return <Navigate to="/member/dashboard" />;
	}
	if (permissionLevel === "EMPLOYEE") {
		return <Navigate to="/employee/dashboard" />;
	} else {
		return <Outlet />;
	}

	// If the user is authenticated then redirect to the dashboard
	// Otherwise redirect to the login page
	// return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;
