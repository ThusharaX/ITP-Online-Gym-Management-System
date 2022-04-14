import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	// If the user is authenticated then redirect to the dashboard
	// Otherwise redirect to the login page
	return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default CheckLoginStatus;
