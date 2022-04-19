const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},

	content: {
		type: String,
		require: true,
	},

	category: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("Notice", NoticeSchema);
