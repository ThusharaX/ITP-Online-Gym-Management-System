import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PrivateRoute1 from "./PrivateRoute1";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
	Sample,
	Home,
	WorkoutProgram,
	UserLogin,
	Dashboard,
	PersonalTrainerRequest,
	Events,
	Eventlist,
	TrainerDashboard,
	TrainerLogin,
	ListTrainers,
	TrainerRegister,
	WorkoutScR,
	Workout,
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

					<Route exact path="/trainers/login" element={<TrainerLogin />} />
					<Route exact path="/trainers/register" element={<TrainerRegister />} />

					<Route exact path="/events" element={<Events />} />
					<Route exact path="/trainers/events" element={<Eventlist />} />

					<Route exact path="/userLogin" element={<CheckLoginStatus />}>
						<Route exact path="/userLogin" element={<UserLogin />} />
					</Route>
					<Route exact path="/request" element={<PersonalTrainerRequest />} />
					<Route exact path="/workout" element={<Workout />} />

					{/* Private Routes */}
					<Route exact path="/dashboard" element={<PrivateRoute />}>
						<Route exact path="/dashboard" element={<Dashboard />} />
					</Route>
					<Route exact path="/trainers" element={<PrivateRoute1 />}>
						<Route exact path="/trainers" element={<TrainerDashboard />} />
						<Route exact path="/trainers/list" element={<ListTrainers />} />
					</Route>

					{/* 404 */}
					<Route path="*" element={<Error404 />} />

					{/* Workout Schedule Request*/}
					<Route path="/workoutscr" element={<WorkoutScR />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
