import SalaryModel from "../models/Salary.model";

// Insert a salary
export const insertSalary = async (salaryData) => {
	return await SalaryModel.create(salaryData)
		.then(async (salary) => {
			await salary.save();
			return salary;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update a salary
export const updateSalary = async (salaryId, salaryData) => {
	return await SalaryModel.findByIdAndUpdate(salaryId, salaryData, {
		new: true,
	})
		.then((salary) => {
			if (salary) {
				return salary;
			} else {
				throw new Error("Salary not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all salaries
export const getAllSalaries = async () => {
	return await SalaryModel.find({})
		.then((salaries) => {
			return salaries;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get a salary
export const getOneSalary = async (salaryId) => {
	return await SalaryModel.findById(salaryId)
		.then((salary) => {
			if (salary) {
				return salary;
			} else {
				throw new Error("Salary not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
