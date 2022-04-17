const mongoose = require("mongoose");

const PersonalTrainerReqSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	perTrainer: {
		type: String,
		required: true,
	},
	timeSlot: {
		type: String,
		required: true,
	},
	TrainDay: {
		type: String,
		required: true,
	},
	package: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("PersonalTrainerReq", PersonalTrainerReqSchema);
