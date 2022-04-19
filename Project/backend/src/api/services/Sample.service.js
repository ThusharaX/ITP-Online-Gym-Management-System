import SampleModel from "../models/Sample.model";

// Insert one sample
export const insertSample = async (sampleData) => {
	return await SampleModel.create(sampleData)
		.then(async (sample) => {
			await sample.save();
			return sample;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all samples
export const getAllSamples = async () => {
	return await SampleModel.find({})
		.then((samples) => {
			return samples;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one sample
export const getOneSample = async (sampleId) => {
	return await SampleModel.findById(sampleId)
		.then((sample) => {
			if (sample) {
				return sample;
			} else {
				throw new Error("Sample not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one sample
export const updateSample = async (sampleId, sampleData) => {
	return await SampleModel.findByIdAndUpdate(sampleId, sampleData, {
		new: true,
	})
		.then((sample) => {
			if (sample) {
				return sample;
			} else {
				throw new Error("Sample not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one sample
export const deleteSample = async (sampleId) => {
	return await SampleModel.findByIdAndDelete(sampleId)
		.then((sample) => {
			if (sample) {
				return sample;
			} else {
				throw new Error("Sample not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search sample titles or content
export const searchSamples = async (searchTerm) => {
	return await SampleModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((samples) => {
			return samples;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
