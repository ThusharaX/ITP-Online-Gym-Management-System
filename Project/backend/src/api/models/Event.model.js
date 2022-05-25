const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	tags: [
		{
			type: String,
			required: true,
		},
	],
	description: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	trainer: {
		type: String,
		required: true,
	},

	users: [{ uid: { type: mongoose.Schema.Types.ObjectId }, status: { type: String } }],
});

module.exports = mongoose.model("events", EventsSchema);
