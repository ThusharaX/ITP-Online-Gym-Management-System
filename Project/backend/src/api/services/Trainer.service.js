import users from "../models/User.model";

const getTrainers = async (search) => {
	if (search) {
		var xt = new RegExp(search);
		return await users
			.find({ title: xt })
			.then((newTrainer) => {
				return newTrainer;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	} else {
		return await users
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
	return await users
		.findById(id)
		.then((trainer) => {
			if (trainer) {
				let NewTrainer = {
					_id: trainer._id,
					firstName: trainer.firstName,
					lastName: trainer.lastName,
					username: trainer.username,
					nic: trainer.nic,
					dob: trainer.dob,
					address: trainer.address,
					email: trainer.email,
					gender: trainer.gender,
					qualifications: trainer.qualifications,
					phoneNumber: trainer.phoneNumber,
					createdAt: trainer.createdAt,
				};

				return NewTrainer;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const updateTrainers = async (id, body) => {
	return await users
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
	return await users
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
};
