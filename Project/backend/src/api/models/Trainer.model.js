const mongoose = require("mongoose");

const TrainersSchema = new mongoose.Schema({
	fName: {
		type: String,
		required: true,
		max: 100,
	},
	lName: {
		type: String,
		required: true,
		max: 100,
	},
	uName: {
		type: String,
		// unique: true,
		required: true,
		max: 50,
	},
	nic: {
		type: String,
		// unique: true,
		required: true,
		max: 12,
	},
	dob: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		// unique: true,
		required: true,
		max: 50,
	},
	gender: {
		type: String,
		required: true,
		max: 1,
	},
	address: {
		type: String,
		required: true,
	},
	pNumber: {
		type: String,
		required: true,
		max: 15,
	},
	Qualifications: [
		{
			type: String,
			required: true,
		},
	],
	expYears: {
		type: Number,
		required: true,
		max: 50,
	},
	password: {
		type: String,
		required: true,
		max: 100,
	},
});

module.exports = mongoose.model("trainers", TrainersSchema);

// {
//   "fName":"fName1",
//  "lName": "lName1",
//   "uName": "uName1",
//   "nic": "1234567899",
//   "dob": "2012-04-23",
//   "email":"dark@gmail.com",
//   "gender": "male",
//    "address":"address1",
//    "pNumber" : "078545652685",
//   "Qualifications": ["css", "javascript", "mongoose", "node"],
//   "expYears": 4,
//   "password": "psw1"
// }
