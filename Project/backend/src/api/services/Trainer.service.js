let trainers = require("../models/Trainer.model");

const createTrainers = async (trainer) => {
	return await trainer
		.save()
		.then(async (savedTrainer) => {
			await savedTrainer.save();
			return savedTrainer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const getTrainers = async (search) => {
	if (search) {
		var xt = new RegExp(search);
		return await trainers
			.find({ title: xt })
			.then((newTrainer) => {
				return newTrainer;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	} else {
		return await trainers
			.find()
			.then((updatedTrainer) => {
				return updatedTrainer;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
};

const getTrainer = async (id) => {
	return await trainers
		.findById(id)
		.then((event) => {
			if (event) {
				return event;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const updateTrainers = async (id, body) => {
	return await trainers
		.updateOne({ _id: id }, { $set: body })
		.then((updatedTrainer) => {
			if (updatedTrainer) {
				return updatedTrainer;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const deleteTrainers = async (id) => {
	return await trainers
		.deleteOne({ _id: id })
		.then((removedTrainer) => {
			if (removedTrainer) {
				return removedTrainer;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

module.exports = {
	getTrainer,
	updateTrainers,
	deleteTrainers,
	getTrainers,
	createTrainers,
};
