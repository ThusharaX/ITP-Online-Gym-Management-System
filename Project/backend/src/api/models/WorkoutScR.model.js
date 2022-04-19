const mongoose = require("mongoose");

const WorkoutScRSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	requirement: {
		type: String,
		required: true,
	},
	/*rstatus: {
		type: String,
		required: true,
	},*/
});

module.exports = mongoose.model("WorkoutScR", WorkoutScRSchema);
