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
