import users from "../models/User.model";

const getEmployees = async (search) => {
	if (search) {
		var xt = new RegExp(search);
		return await users
			.find({ title: xt, permissionLevel: "EMPLOYEE" })
			.then((employees) => {
				employees = employees.map((employee) => {
					return {
						_id: employee._id,
						firstName: employee.firstName,
						lastName: employee.lastName,
						nic: employee.nic,
						dob: employee.dob,
						username: employee.username,
						phoneNumber: employee.phoneNumber,
						email: employee.email,
					};
				});

				return employees;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	} else {
		return await users
			.find({ permissionLevel: "EMPLOYEE" })
			.then((employees) => {
				return employees;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
};

const getEmployee = async (id) => {
	return await users
		.findById(id)
		.then((employee) => {
			if (employee) {
				let NewEmployee = {
					_id: employee._id,
					firstName: employee.firstName,
					lastName: employee.lastName,
					username: employee.username,
					nic: employee.nic,
					dob: employee.dob,
					address: employee.address,
					email: employee.email,
					gender: employee.gender,
					qualifications: employee.qualifications,
					phoneNumber: employee.phoneNumber,
					createdAt: employee.createdAt,
				};

				return NewEmployee;
			} else {
				throw new Error("Employee not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const updateEmployees = async (id, body) => {
	return await users
		.updateOne({ _id: id }, { $set: body })
		.then((updatedEmployee) => {
			if (updatedEmployee) {
				// eslint-disable-next-line no-console
				console.log(updatedEmployee);
				return updatedEmployee;
			} else {
				throw new Error("Employee not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const deleteEmployees = async (id) => {
	return await users
		.deleteOne({ _id: id })
		.then((removedEmployee) => {
			if (removedEmployee) {
				return removedEmployee;
			} else {
				throw new Error("Employee not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

module.exports = {
	getEmployee,
	updateEmployees,
	deleteEmployees,
	getEmployees,
};
