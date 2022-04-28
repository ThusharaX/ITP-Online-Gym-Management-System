import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		if (permissionLevel === "ADMIN") {
			return <Navigate to="/admin/login" />;
		}
		if (permissionLevel === "TRAINER") {
			return <Navigate to="/trainers/login" />;
		}
		if (permissionLevel === "MEMBER") {
			return <Navigate to="/member/login" />;
		}
		if (permissionLevel === "EMPLOYEE") {
			return <Navigate to="/employee/login" />;
		} else {
			return <Navigate to="/" />;
		}
	}

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page
	// return isAuthenticated ? <Outlet /> : <Navigate to="/userLogin" />;
};

export default PrivateRoute;
