const mongoose = require("mongoose");

const trainerBDSchema = new mongoose.Schema({
	trname: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	fb: {
		type: String,
	},
	wNum: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	monday: {
		type: String,
		required: true,
	},
	tuesday: {
		type: String,
		required: true,
	},
	wednesday: {
		type: String,
		required: true,
	},
	thursday: {
		type: String,
		required: true,
	},
	friday: {
		type: String,
		required: true,
	},
	saturday: {
		type: String,
		required: true,
	},
	sunday: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("TrainerBD", trainerBDSchema);
