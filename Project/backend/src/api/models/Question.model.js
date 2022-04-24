// create connect to database
const mongoose = require("mongoose");

const Question = new mongoose.Schema({
	//email, qTopic , question, date ,status, weekNo
	//	email,name,title,content
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
	content: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Question", Question);
