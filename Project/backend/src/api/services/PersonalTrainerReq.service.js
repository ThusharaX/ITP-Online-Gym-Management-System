import PersonalTrainerReqModel from "../models/PersonalTrainerReq.model";

// Insert one request
export const insertPersonalTrainerReq = async (reqData) => {
	return await PersonalTrainerReqModel.create(reqData)
		.then(async (personalTrainerReq) => {
			await personalTrainerReq.save();
			return personalTrainerReq;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all request
export const getAllPersonalTrainerReq = async () => {
	return await PersonalTrainerReqModel.find({})
		.then((personalTrainerReq) => {
			return personalTrainerReq;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one request
export const getOnePersonalTrainerReq = async (reqId) => {
	return await PersonalTrainerReqModel.findById(reqId)
		.then((personalTrainerReq) => {
			if (personalTrainerReq) {
				return personalTrainerReq;
			} else {
				throw new Error("request not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one request
export const updatePersonalTrainerReq = async (reqId, reqData) => {
	return await PersonalTrainerReqModel.findByIdAndUpdate(reqId, reqData, {
		new: true,
	})
		.then((personalTrainerReq) => {
			if (personalTrainerReq) {
				return personalTrainerReq;
			} else {
				throw new Error("Request not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one sample
export const deletePersonalTrainerReq = async (reqId) => {
	return await PersonalTrainerReqModel.findByIdAndDelete(reqId)
		.then((personalTrainerReq) => {
			if (personalTrainerReq) {
				return personalTrainerReq;
			} else {
				throw new Error("Request not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search sample titles or content
export const searchPersonalTrainerReq = async (searchTerm) => {
	return await PersonalTrainerReqModel.find({
		$or: [
			{ perTrainer: { $regex: searchTerm, $options: "i" } },
			{ package: { $regex: searchTerm, $options: "i" } },
			{ name: { $regex: searchTerm, $options: "i" } },
			{ TrainDay: { $regex: searchTerm, $options: "i" } },
			{ status: { $regex: searchTerm, $options: "i" } },
		],
	})
		.then((personalTrainerReq) => {
			return personalTrainerReq;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
