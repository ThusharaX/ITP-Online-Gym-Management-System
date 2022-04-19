const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Sample", SampleSchema);
