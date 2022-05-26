import FeedbackModel from "../models/Feedback.model";

// insert a feedback
export const insertFeedback = async (feedbackData) => {
	return await FeedbackModel.create(feedbackData)
		.then(async (feedback) => {
			await feedback.save();
			return feedback;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//update a feedback
export const updateFeedback = async (feedbackId, feedbackData) => {
	return await FeedbackModel.findByIdAndUpdate(feedbackId, feedbackData, {
		new: true,
	})
		.then((feedback) => {
			if (feedback) {
				return feedback;
			} else {
				throw new Error("Feedback not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all feedbacks
export const getAllFeedbacks = async () => {
	return await FeedbackModel.find({})
		.then((feedbacks) => {
			return feedbacks;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//Search feedbacks from name and title and Content
export const searchFeedbacks = async (searchTerm) => {
	return await FeedbackModel.find({
		$or: [
			{ name: { $regex: searchTerm, $options: "i" } },
			{ title: { $regex: searchTerm, $options: "i" } },
			{ content: { $regex: searchTerm, $options: "i" } },
		],
	})
		.then((feedbacks) => {
			return feedbacks;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
