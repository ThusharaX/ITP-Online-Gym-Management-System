import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

const MemberContext = createContext();
import MemberAPI from "./api/MemberAPI";

export function MemberProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const [members, setMembers] = useState([]);

	//member
	const [member, setMember] = useState({
		firstName: "",
		lastName: "",
		username: "",
		nic: "",
		email: "",
		dob: "",
		phoneNumber: "",
	});

	const form = useForm({
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			password: (value) => (value.length >= 4 ? null : "Password must be at least 4 characters"),
		},
	});

	const login = (values) => {
		setIsLoading(true);
		MemberAPI.MemberLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "MEMBER") {
					setIsLoading(false);
					return alert("You are not a Member");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.username);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					window.location.href = "/member";
					setIsLoggedIn(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	// Get all members
	useEffect(() => {
		setIsLoading(true);
		MemberAPI.getMembers().then((response) => {
			setMembers(response.data);
			setIsLoading(false);
		});
	}, []);

	const getMember = (id) => {
		MemberAPI.getMemberData(id).then((res) => {
			setMember(res.data);
		});
	};

	//Edit Member
	const editMember = (values) => {
		const newMember = {
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.username,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			phoneNumber: values.phoneNumber,
		};
		MemberAPI.editMember(values.id, newMember).then((response) => {
			setMembers(members.map((member) => (member._id === values.id ? response.data : member)));
			form.reset();
		});
	};
	//Edit Member Modal
	const [editOpened, setEditOpened] = useState(false);

	const formProfile = useForm({
		initialValues: {
			firstName: "",
			lastName: "",
			username: "",
			nic: "",
			email: "",
			dob: "",
			phoneNumber: "",
		},
	});

	// useEffect(() => {
	// 	MemberAPI.getMemberData("627ecb08f2f73a9cc7a5a536").then((res) => {
	// 		setMember(res.data);
	// 		formProfile.setFieldValue("firstName", res.data.firstName);
	// 		formProfile.setFieldValue("lastName", res.data.lastName);
	// 		formProfile.setFieldValue("username", res.data.username);
	// 		formProfile.setFieldValue("nic", res.data.nic);
	// 		formProfile.setFieldValue("email", res.data.email);
	// 		formProfile.setFieldValue("dob", res.data.dob);
	// 		formProfile.setFieldValue("phoneNumber", res.data.phoneNumber);
	// 	});
	// 	MemberAPI.getMembers().then((res) => {
	// 		setMembers(res.data);
	// 	});
	// });

	// Delete Member and update UI
	const deleteMember = (id) => {
		MemberAPI.deleteMember(id).then(() => {
			setMembers(members.filter((member) => member._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Member",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this Member? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete Member", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteMember(id),
		});

	return (
		<MemberContext.Provider
			value={{
				login,
				isLoading,
				setIsLoading,
				isLoggedIn,
				setIsLoggedIn,
				form,
				message,
				setMessage,
				editMember,
				formProfile,
				getMember,
				member,
				members,
				confirmDelete,
				setMembers,
				editOpened,
				setEditOpened,
				setMember,
			}}
		>
			{children}
		</MemberContext.Provider>
	);
}

export default MemberContext;
