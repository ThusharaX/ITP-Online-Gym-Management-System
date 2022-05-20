import React from "react";

// Page components
import SignUpForm from "./SignUpForm";

import { UserProvider } from "../../contexts/UserContext";

const SignUp = () => {
	return (
		<UserProvider>
			<SignUpForm />
		</UserProvider>
	);
};

export default SignUp;
