import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const isAuthenticated = localStorage.getItem("permissionLevel") == "TRAINER";

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to trainer login page
	return isAuthenticated ? <Outlet /> : <Navigate to="/trainers/login" />;
};

export default PrivateRoute;
