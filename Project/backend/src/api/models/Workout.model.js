const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
	workout_name: {
		type: String,
		required: true,
	},
	workout_category: {
		type: String,
		required: true,
	},
	muscle_group: {
		type: String,
		required: true,
	},
	starting_position_img: {
		type: String,
		required: true,
	},
	mid_position_img: {
		type: String,
		required: true,
	},
	instructions: {
		type: String,
		required: true,
	},
	action: {
		type: String,
		required: true,
	},
	tips: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	viewCount: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model("Workout", WorkoutSchema);
