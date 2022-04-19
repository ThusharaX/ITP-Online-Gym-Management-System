import TrainerBDModel from "../models/TrainerBD.model";

// Insert one blog details
export const insertTrainerBD = async (tData) => {
	return await TrainerBDModel.create(tData)
		.then(async (trainerBD) => {
			await trainerBD.save();
			return trainerBD;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all blog details
export const getAllTrainerBD = async () => {
	return await TrainerBDModel.find({})
		.then((trainerBD) => {
			return trainerBD;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one blog detail
export const getOneTrainerBD = async (tId) => {
	return await TrainerBDModel.findById(tId)
		.then((trainerBD) => {
			if (trainerBD) {
				return trainerBD;
			} else {
				throw new Error("Sample not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one blog details
export const updateTrainerBD = async (tId, tData) => {
	return await TrainerBDModel.findByIdAndUpdate(tId, tData, { new: true })
		.then((trainerBD) => {
			if (trainerBD) {
				return trainerBD;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one blog detail
export const deleteTrainerBD = async (tId) => {
	return await TrainerBDModel.findByIdAndDelete(tId)
		.then((trainerBD) => {
			if (trainerBD) {
				return trainerBD;
			} else {
				throw new Error("Trainer not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search email
// export const searchTrainerDB = async (searchTerm) => {
// 	return await TrainerDBModel.find({
// 		$or: [
// 			{ trname: { $regex: searchTerm, $options: "i" } },
// 			{ email: { $regex: searchTerm, $options: "i" } }
// 		]
// 	})
// 		.then((trainerBD) => {
// 			return trainerBD;
// 		}
// 	)
// 		.catch((error) => {
// 			throw new Error(error.message);
// 		}
// 	);
// };
