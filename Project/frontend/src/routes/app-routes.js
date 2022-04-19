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
} from "../pages";

// Error pages
import Error404 from "../pages/error/Error404";

import NavBar from "../components/NavBar";
import FooterSection from "../components/Footer";

const AppRoutes = () => {
	const footerLinks = [
		{
			link: "#",
			label: "Contact",
		},
		{
			link: "#",
			label: "Privacy",
		},
		{
			link: "#",
			label: "Blog",
		},
		{
			link: "#",
			label: "Careers",
		},
	];

	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					{/* Public Routes */}
					<Route exact path="/" element={<Home />} />
					<Route exact path="/sample" element={<Sample />} />

					<Route exact path="/trainers/login" element={<TrainerLogin />} />
					<Route exact path="/trainers/register" element={<TrainerRegister />} />

					<Route exact path="/events" element={<Events />} />
					<Route exact path="/trainers/events" element={<Eventlist />} />

					<Route exact path="/userLogin" element={<CheckLoginStatus />}>
						<Route exact path="/userLogin" element={<UserLogin />} />
					</Route>
					<Route exact path="/request" element={<PersonalTrainerRequest />} />

					{/* Admin Routes */}
					<Route exact path="/workoutProgram" element={<WorkoutProgram />} />

					<Route exact path="/dashboard" element={<PrivateRoute userType="ADMIN" />}>
						<Route exact path="/dashboard" element={<Dashboard />} />
					</Route>

					{/* Trainer Routes */}
					<Route exact path="/trainers" element={<PrivateRoute1 />}>
						<Route exact path="/trainers" element={<TrainerDashboard />} />
						<Route exact path="/trainers/list" element={<ListTrainers />} />
					</Route>

					{/* Workout Schedule Request*/}
					<Route path="/workoutscr" element={<WorkoutScR />} />

					{/* 404 */}
					<Route path="*" element={<Error404 />} />
				</Routes>
				<FooterSection links={footerLinks} />
			</Router>
		</>
	);
};

export default AppRoutes;
