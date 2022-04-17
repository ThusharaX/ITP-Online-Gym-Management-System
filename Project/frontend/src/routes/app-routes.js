import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import { Sample, Home, WorkoutProgram, Events, AddEvents, Eventlist, UserLogin, Dashboard } from "../pages";
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

					<Route exact path="/events" element={<Events />} />
					<Route exact path="/events/add-event" element={<AddEvents />} />
					<Route exact path="/trainers/events" element={<Eventlist />} />

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
