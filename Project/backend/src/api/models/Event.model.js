const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
	title: {
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
});

module.exports = mongoose.model("events", EventsSchema);

// {
// "title":"title1",
// "tags": ["css", "javascript", "mongoose", "node"],
// "description": "description1",
// "details": "details1",
// "gender": "gender1",
// "date": "2012-04-23T18:25:43.511Z"
//  "trainer": "6238afed94d1c551735ca084"
// }

// {
//   "title":"holl up"
// }
