const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const UserSchema = mongoose.Schema(
	{
		avatar: {
			type: String,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		nic: {
			type: String,
			required: true,
			unique: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		authToken: {
			type: String,
			required: false,
		},
		enrolledWorkoutPrograms: [
			{
				type: mongoose.Schema.Types.ObjectId,
			},
		],

		// Required trainer fields
		address: {
			type: String,
		},
		qualifications: [
			{
				type: String,
			},
		],
		dob: {
			type: Date,
		},
		gender: {
			type: String,
		},

		permissionLevel: {
			type: String,
			required: true,
			enum: ["ADMIN", "TRAINER", "MEMBER", "EMPLOYEE"],
			default: "MEMBER",
		},
		deletedAt: {
			type: Date,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", async function (next) {
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

UserSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign({ _id: user._id }, secret);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
