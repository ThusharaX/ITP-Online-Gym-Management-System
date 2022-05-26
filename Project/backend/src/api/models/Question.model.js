// create connect to database
const mongoose = require("mongoose");

const Question = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		answers: [{ type: String }],
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
	}
);
module.exports = mongoose.model("Question", Question);
