const mongoose = require("mongoose");

const SalarySchema = new mongoose.Schema({
	nic: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},

	month: {
		type: String,
		required: true,
	},

	basicSalary: {
		type: String,
		required: true,
	},

	otHours: {
		type: String,
		required: true,
	},

	otRate: {
		type: String,
		required: true,
	},

	otTotal: {
		type: String,
		required: true,
	},

	totalSalary: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Salary", SalarySchema);
