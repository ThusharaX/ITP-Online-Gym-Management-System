import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
	Sample,
	Home,
	WorkoutProgram,
	Dashboard,
	UserLogin,
	TrainerDashboard,
	TrainerLogin,
	ListTrainers,
	TrainerRegister,
} from "../pages";
// Error pages
import Error404 from "../pages/error/Error404";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					{/* Public Routes */}
					<Route exact path="/" element={<Home />} />
					<Route exact path="/sample" element={<Sample />} />
					<Route exact path="/workoutProgram" element={<WorkoutProgram />} />

					<Route exact path="/trainers/" element={<TrainerDashboard />} />
					<Route exact path="/trainers/login" element={<TrainerLogin />} />
					<Route exact path="/trainers/register" element={<TrainerRegister />} />
					<Route exact path="/trainers/list" element={<ListTrainers />} />

					<Route exact path="/userLogin" element={<CheckLoginStatus />}>
						<Route exact path="/userLogin" element={<UserLogin />} />
					</Route>

					{/* Private Routes */}
					<Route exact path="/dashboard" element={<PrivateRoute />}>
						<Route exact path="/dashboard" element={<Dashboard />} />
					</Route>

					{/* 404 */}
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
