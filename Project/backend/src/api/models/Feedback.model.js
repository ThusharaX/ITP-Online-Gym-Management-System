// create connect to database
const mongoose = require("mongoose");

const Feedback = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	displayname: {
		type: String,
		required: true,
	},
	ftitle: {
		type: String,
		required: true,
	},
	feedback: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Feedback", Feedback);
