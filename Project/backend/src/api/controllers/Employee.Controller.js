import EmployeeService, { UserService } from "../services";

let users = require("../models/User.model");
import logger from "../../util/logger";

const getEmployee = async (req, res, next) => {
	await EmployeeService.getEmployee(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const getEmployees = async (req, res, next) => {
	await EmployeeService.getEmployees(req.query.search)
		.then(async (data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Create Employee
export const createEmployee = async (req, res, next) => {
	if (await users.findOne({ email: req.body.email }))
		return res.status(400).json({ success: false, msg: "Email already exists" });
	if (await users.findOne({ nic: req.body.nic }))
		return res.status(400).json({ success: false, msg: "NIC already exists" });
	if (await users.findOne({ username: req.body.username }))
		return res.status(400).json({ success: false, msg: "Username already exists" });

	const employee = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nic: req.body.nic,
		dob: req.body.dob,
		username: req.body.username,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		gender: req.body.gender,
		trainername: req.body.trainername,
		password: req.body.password,
		address: req.body.address,
		qualifications: req.body.qualifications,
		permissionLevel: "EMPLOYEE",
	};

	await UserService.insertUser(employee)
		.then((data) => {
			logger.info(`New employee with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const updateEmployee = async (req, res, next) => {
	await EmployeeService.updateEmployees(req.params.id, req.body)
		.then((data) => {
			logger.info(`Updated employee with ID ${data._id}`);
			req.handleResponse.successRespond(res)(data);

			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

//to be implemented somehow
const deleteEmployees = async (req, res, next) => {
	await EmployeeService.deleteEmployees({ _id: req.params.id })
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

module.exports = {
	getEmployee,
	getEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployees,
};
