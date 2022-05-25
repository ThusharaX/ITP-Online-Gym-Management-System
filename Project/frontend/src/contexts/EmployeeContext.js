import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

const EmployeeContext = createContext();
import EmployeeAPI from "./api/EmployeeAPI";

export function EmployeeProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const [employees, setEmployees] = useState([]);

	//employee
	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		username: "",
		nic: "",
		email: "",
		dob: "",
		phoneNumber: "",
		qualifications: [],
	});

	// Get all employees
	useEffect(() => {
		setIsLoading(true);
		EmployeeAPI.getEmployees().then((response) => {
			setEmployees(response.data);
			setIsLoading(false);
		});
	}, []);

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
		EmployeeAPI.EmployeeLogin(values)
			.then((response) => {
				if (response.data.permissionLevel !== "EMPLOYEE") {
					setIsLoading(false);
					return alert("You are not a Employee");
				} else {
					localStorage.setItem("uID", response.data._id);
					localStorage.setItem("username", response.data.username);
					localStorage.setItem("authToken", response.data.token);
					localStorage.setItem("permissionLevel", response.data.permissionLevel);
					window.location.href = "/employee";
					setIsLoggedIn(true);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setMessage(err.response.data.details.message);
				setIsLoading(false);
			});
	};

	const getEmployee = (id) => {
		EmployeeAPI.getEmployeeData(id).then((res) => {
			setEmployee(res.data);
		});
	};

	//Edit Employee
	const editEmployee = (values) => {
		const newEmployee = {
			firstName: values.firstName,
			lastName: values.lastName,
			username: values.username,
			nic: values.nic,
			email: values.email,
			dob: values.dob,
			phoneNumber: values.phoneNumber,
			qualifications: String(values.qualifications).split(","),
		};
		EmployeeAPI.editEmployee(values.id, newEmployee).then((response) => {
			setEmployees(employees.map((employee) => (employee._id === values.id ? response.data : employee)));
			form.reset();
		});
	};
	//Edit Employee Modal
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
			qualifications: [],
		},
	});

	useEffect(() => {
		if (localStorage.getItem("uID")) {
			EmployeeAPI.getEmployeeData(localStorage.getItem("uID")).then((res) => {
				setEmployee(res.data);
				formProfile.setFieldValue("id", res.data._id);
				formProfile.setFieldValue("firstName", res.data.firstName);
				formProfile.setFieldValue("lastName", res.data.lastName);
				formProfile.setFieldValue("username", res.data.username);
				formProfile.setFieldValue("nic", res.data.nic);
				formProfile.setFieldValue("email", res.data.email);
				formProfile.setFieldValue("dob", res.data.dob);
				formProfile.setFieldValue("phoneNumber", res.data.phoneNumber);
				formProfile.setFieldValue("qualifications", res.data.qualifications);
			});
		}
	}, []);

	// Delete sample and update UI
	const deleteEmployee = (id) => {
		EmployeeAPI.deleteEmployee(id).then(() => {
			setEmployees(employees.filter((employee) => employee._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Employee",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this Employee? This action is destructive and cannot be undone.
				</Text>
			),
			labels: { confirm: "Delete Employee", cancel: "No don't delete it" },
			confirmProps: { color: "red" },
			// eslint-disable-next-line no-console
			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteEmployee(id),
		});

	return (
		<EmployeeContext.Provider
			value={{
				login,
				isLoading,
				setIsLoading,
				isLoggedIn,
				setIsLoggedIn,
				form,
				message,
				setMessage,
				editEmployee,
				formProfile,
				getEmployee,
				employee,
				employees,
				confirmDelete,
				setEmployees,
				editOpened,
				setEditOpened,
				setEmployee,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
}

export default EmployeeContext;
