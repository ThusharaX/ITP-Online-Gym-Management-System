import React from "react";

// Page components
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

// MemberProvider
import { MemberProvider } from "../../contexts/MemberContext";

// const MemberRegister = () => {
// 	return (
// 		<MemberProvider>
// 			<AddMember />
// 		</MemberProvider>
// 	);
// };

const MemberLogin = () => {
	return (
		<MemberProvider>
			<Login />
		</MemberProvider>
	);
};

const MemberDashboard = () => {
	return (
		<MemberProvider>
			<Dashboard />
		</MemberProvider>
	);
};

const MemberProfile = () => {
	return (
		<MemberProvider>
			<Profile />
		</MemberProvider>
	);
};

export { MemberDashboard, MemberLogin, MemberProfile };
