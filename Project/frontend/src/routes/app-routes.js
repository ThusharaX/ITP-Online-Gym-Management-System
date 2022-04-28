import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
	Sample,
	Home,
	WorkoutProgram,
	PersonalTrainerRequest,
	Events,
	Eventlist,
	TrainerDashboard,
	TrainerLogin,
	ListTrainers,
	TrainerRegister,
	Blog,
	Write,
	Blogs,
	BlogsList,
	BlogCreateRequest,
	TrainerPackages,
	Salary,
	Notice,
	WorkoutScR,
	Workout,
	AdminLogin,
	AdminDashboard,
	AdminProfile,
	CommonLogin,
	WorkoutScRList,
	TrainerProfile,
	QuestionList,
	AddQuestion,
	Feedback,
} from "../pages";

// Error pages
import Error404 from "../pages/error/Error404";
import NavBar from "../components/NavBar";
import FooterSection from "../components/Footer";
import Question from "../pages/question";

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
					<Route exact path="/salary" element={<Salary />} />
					<Route exact path="/question" element={<Question />} />

					<Route exact path="/trainers/login" element={<CheckLoginStatus />}>
						<Route exact path="/trainers/login" element={<TrainerLogin />} />
					</Route>
					<Route exact path="/trainers/register" element={<CheckLoginStatus />}>
						<Route exact path="/trainers/register" element={<TrainerRegister />} />
					</Route>

					<Route exact path="/events" element={<Events />} />

					<Route exact path="/trainers/events" element={<Eventlist />} />
					<Route exact path="/notice" element={<Notice />} />
					<Route exact path="/request" element={<PersonalTrainerRequest />} />

					<Route exact path="/blog" element={<Blog />} />
					<Route exact path="/write" element={<Write />} />
					<Route exact path="/request" element={<PersonalTrainerRequest />} />
					<Route exact path="/blogCreate" element={<BlogCreateRequest />} />
					<Route exact path="/package" element={<TrainerPackages />} />

					<Route exact path="/blogs" element={<Blogs />} />

					<Route exact path="/workout" element={<Workout />} />

					<Route exact path="/workoutProgram" element={<WorkoutProgram />} />

					{/*Workout Schedule Request */}
					<Route path="/workoutscr" element={<WorkoutScR />} />
					<Route path="/workoutscrlist" element={<WorkoutScRList />} />

					<Route exact path="/login" element={<CheckLoginStatus />}>
						<Route exact path="/login" element={<CommonLogin />} />
					</Route>

					<Route exact path="/admin/login" element={<CheckLoginStatus />}>
						<Route exact path="/admin/login" element={<AdminLogin />} />
					</Route>

					<Route exact path="/feedback" element={<Feedback />} />

					{/* Admin Routes */}
					<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
						<Route exact path="/admin" element={<AdminDashboard />} />
						<Route exact path="/admin/profile" element={<AdminProfile />} />
					</Route>

					{/* Trainer Routes */}
					<Route exact path="/trainers" element={<PrivateRoute permissionLevel="TRAINER" />}>
						<Route exact path="/trainers" element={<TrainerDashboard />} />
						<Route exact path="/trainers/list" element={<ListTrainers />} />
						<Route exact path="/trainers/events" element={<Eventlist />} />
						<Route exact path="/trainers/profile" element={<TrainerProfile />} />
					</Route>

					{/* 404 */}
					<Route path="*" element={<Error404 />} />
				</Routes>
				<FooterSection links={footerLinks} />
			</Router>
		</>
	);
};

export default AppRoutes;
