const mongoose = require("mongoose");

const EnrollWorkoutProgramsSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	workoutProgram: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

module.exports = mongoose.model("EnrollWorkoutPrograms", EnrollWorkoutProgramsSchema);
