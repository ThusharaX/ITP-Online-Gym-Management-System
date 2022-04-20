const mongoose = require("mongoose");

const WorkoutProgramSchema = new mongoose.Schema(
	{
		photoURL: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		conducted_by: {
			type: String,
			required: true,
		},
		fee: {
			type: String,
			required: true,
		},
		day: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
	}
);

module.exports = mongoose.model("WorkoutProgram", WorkoutProgramSchema);
