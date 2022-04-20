const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

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

TrainersSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

TrainersSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign({ _id: user._id }, secret);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

TrainersSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

const Trainer = mongoose.model("Trainer", TrainersSchema);

module.exports = mongoose.model("trainers", TrainersSchema);
