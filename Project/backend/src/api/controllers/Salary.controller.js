import SalaryService from "../services";

// Insert salary
export const insertSalary = async (request, response, next) => {
	await SalaryService.insertSalary(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update salary
export const updateSalary = async (request, response, next) => {
	await SalaryService.updateSalary(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all salaries
export const getAllSalaries = async (request, response, next) => {
	await SalaryService.getAllSalaries()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get a salary
export const getOneSalary = async (request, response, next) => {
	await SalaryService.getOneSalary(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Salaries
export const searchSalaries = async (request, response, next) => {
	await SalaryService.searchSalaries(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//get a salary from Employee
export const getOneEmployeeSalary = async (request, response, next) => {
	await SalaryService.getOneEmployeeSalary(request.params.nic)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
