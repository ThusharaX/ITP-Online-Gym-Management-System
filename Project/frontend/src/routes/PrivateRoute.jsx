import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ userType }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;
	// const permissionLevel = localStorage.getItem("permissionLevel") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		return <Navigate to="/userLogin" />;
	}

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page
	// return isAuthenticated ? <Outlet /> : <Navigate to="/userLogin" />;
};

export default PrivateRoute;
