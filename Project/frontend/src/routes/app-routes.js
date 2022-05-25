import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Pages
import {
	Sample,
	Home,
	WorkoutProgram,
	// PersonalTrainerRequest,
	Events,
	Eventlist,
	TrainerDashboard,
	TrainerLogin,
	ListTrainers,
	TrainerRegister,
	Blog,
	Write,
	// Blogs,
	// BlogUpdate,
	BlogCreateRequest,
	TrainerPackages,
	Salary,
	Notice,
	WorkoutScR,
	Workout,
	AdminLogin,
	AdminDashboard,
	EventReport,
	AdminProfile,
	CommonLogin,
	WorkoutScRList,
	TrainerProfile,
	QuestionList,
	AddQuestion,
	BlogCreate,
	BD,
	Feedback,
	Request,
	RList,
	SampleReport,
	MemberLogin,
	MemberDashboard,
	MemberProfile,
	WorkoutReport,
	SignUp,
	PReport,
	Member_List,
	MemberReport,
	WorkoutProgramReport,
} from "../pages";

// Error pages
import Error404 from "../pages/error/Error404";
import NavBar from "../components/NavBar";
import FooterSection from "../components/Footer";
import Question from "../pages/question";

import ScrollToTop from "./ScrollToTop";

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
			link: "/blogs",
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
				<ScrollToTop>
					<Routes>
						{/* Public Routes */}
						<Route exact path="/" element={<Home />} />
						<Route exact path="/sample-report" element={<SampleReport />} />
						<Route exact path="/sample" element={<Sample />} />
						<Route exact path="/salary" element={<Salary />} />
						<Route exact path="/question" element={<Question />} />
						<Route exact path="/memberReport" element={<MemberReport />} />
						<Route exact path="/trainers/login" element={<CheckLoginStatus />}>
							<Route exact path="/trainers/login" element={<TrainerLogin />} />
						</Route>
						<Route exact path="/trainers/register" element={<CheckLoginStatus />}>
							<Route exact path="/trainers/register" element={<TrainerRegister />} />
						</Route>

						<Route exact path="/events" element={<Events />} />

						<Route exact path="/trainers/events" element={<Eventlist />} />
						<Route exact path="/notice" element={<Notice />} />
						{/* <Route exact path="/request" element={<PersonalTrainerRequest />} /> */}

						<Route exact path="/blogs" element={<Blog />} />
						<Route exact path="/write" element={<Write />} />
						{/* <Route exact path="/request" element={<PersonalTrainerRequest />} /> */}
						<Route exact path="/blogCreate" element={<BlogCreateRequest />} />
						<Route exact path="/package" element={<TrainerPackages />} />
						<Route exact path="/personal" element={<Request />} />
						<Route exact path="/reqList" element={<RList />} />
						<Route exact path="/pReport" element={<PReport />} />

						{/* <Route exact path="/blogs" element={<Blogs />} />
					<Route exact path="/blogUpdate" element={<BlogUpdate />} /> */}

						<Route exact path="/bd" element={<BD />} />

						<Route exact path="/workout" element={<Workout />} />
						<Route exact path="/workout-report" element={<WorkoutReport />} />

						<Route exact path="/workoutProgram" element={<WorkoutProgram />} />

						{/*Workout Schedule Request */}
						<Route path="/workoutscr" element={<WorkoutScR />} />
						<Route path="/workoutscrlist" element={<WorkoutScRList />} />

						<Route exact path="/login" element={<CheckLoginStatus />}>
							<Route exact path="/login" element={<CommonLogin />} />
						</Route>
						<Route exact path="/signUp" element={<CheckLoginStatus />}>
							<Route exact path="/signUp" element={<SignUp />} />
						</Route>

						<Route exact path="/admin/login" element={<CheckLoginStatus />}>
							<Route exact path="/admin/login" element={<AdminLogin />} />
						</Route>

						<Route exact path="/member/login" element={<CheckLoginStatus />}>
							<Route exact path="/member/login" element={<MemberLogin />} />
						</Route>

						<Route exact path="/feedback" element={<Feedback />} />

						{/* Member Routes */}
						<Route exact path="/member" element={<PrivateRoute permissionLevel="MEMBER" />}>
							<Route exact path="/member" element={<MemberDashboard />} />
							<Route exact path="/member/profile" element={<MemberProfile />} />
						</Route>

						<Route exact path="/memberList" element={<Member_List />} />

						{/* Admin Routes */}
						<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
							<Route exact path="/admin" element={<AdminDashboard />} />
							<Route exact path="/admin/profile" element={<AdminProfile />} />
						</Route>

						{/* Trainer Routes */}
						<Route exact path="/trainers" element={<PrivateRoute permissionLevel="TRAINER" />} />
						<Route exact path="/trainers" element={<TrainerDashboard />} />
						<Route exact path="/trainers/list" element={<ListTrainers />} />
						<Route exact path="/trainers/events" element={<Eventlist />} />
						<Route exact path="/notice" element={<Notice />} />

						<Route exact path="/blogs" element={<Blog />} />
						<Route exact path="/write" element={<Write />} />
						<Route exact path="/blogCreate" element={<BlogCreateRequest />} />
						<Route exact path="/package" element={<TrainerPackages />} />
						<Route exact path="/personal" element={<Request />} />
						<Route exact path="/reqList" element={<RList />} />
						<Route exact path="/pReport" element={<PReport />} />
						<Route exact path="/bd" element={<BD />} />

						<Route exact path="/workout" element={<Workout />} />
						<Route exact path="/workout-report" element={<WorkoutReport />} />

						<Route exact path="/workoutProgram" element={<WorkoutProgram />} />
						<Route exact path="/workoutProgram-report" element={<WorkoutProgramReport />} />

						{/*Workout Schedule Request */}
						<Route path="/workoutscr" element={<WorkoutScR />} />
						<Route path="/workoutscrlist" element={<WorkoutScRList />} />

						<Route exact path="/login" element={<CheckLoginStatus />}>
							<Route exact path="/login" element={<CommonLogin />} />
						</Route>
						<Route exact path="/signUp" element={<CheckLoginStatus />}>
							<Route exact path="/signUp" element={<SignUp />} />
						</Route>

						<Route exact path="/admin/login" element={<CheckLoginStatus />}>
							<Route exact path="/admin/login" element={<AdminLogin />} />
						</Route>

						<Route exact path="/member/login" element={<CheckLoginStatus />}>
							<Route exact path="/member/login" element={<MemberLogin />} />
						</Route>

						<Route exact path="/feedback" element={<Feedback />} />

						{/* Member Routes */}
						<Route exact path="/member" element={<PrivateRoute permissionLevel="MEMBER" />}>
							<Route exact path="/member" element={<MemberDashboard />} />
							<Route exact path="/member/profile" element={<MemberProfile />} />
						</Route>

						{/* Admin Routes */}
						<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
							<Route exact path="/admin" element={<AdminDashboard />} />
							<Route exact path="/admin/profile" element={<AdminProfile />} />
						</Route>

						{/* Trainer Routes */}
						<Route exact path="/event-report" element={<EventReport />} />

						<Route exact path="/trainers" element={<PrivateRoute permissionLevel="TRAINER" />}>
							<Route exact path="/trainers" element={<TrainerDashboard />} />
							<Route exact path="/trainers/list" element={<ListTrainers />} />
							<Route exact path="/trainers/events" element={<Eventlist />} />
							<Route exact path="/trainers/profile" element={<TrainerProfile />} />
							{/* <Route exact path="/trainer/bd" element={<BD />} /> */}
						</Route>

						{/* 404 */}
						<Route path="*" element={<Error404 />} />
					</Routes>
				</ScrollToTop>
				<FooterSection links={footerLinks} />
			</Router>
		</>
	);
};

export default AppRoutes;
