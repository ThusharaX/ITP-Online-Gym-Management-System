import QuestionModel from "../models/Question.model";

// insert a question
export const insertQuestion = async (questionData) => {
	return await QuestionModel.create(questionData)
		.then(async (question) => {
			await question.save();
			return question;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//update a question
export const updateQuestion = async (questionId, questionData) => {
	return await QuestionModel.findByIdAndUpdate(questionId, questionData, {
		new: true,
	})
		.then((question) => {
			if (question) {
				return question;
			} else {
				throw new Error("Question not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete one question
export const deleteQuestion = async (questionId) => {
	return await QuestionModel.findByIdAndRemove(questionId)
		.then((question) => {
			if (question) {
				return question;
			} else {
				throw new Error("Question not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all questions
export const getAllQuestions = async () => {
	return await QuestionModel.find({})
		.then((questions) => {
			return questions;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//Search question from name and title or content or email
export const searchQuestions = async (searchTerm) => {
	return await QuestionModel.find({
		$or: [
			{ name: { $regex: searchTerm, $options: "i" } },
			{ title: { $regex: searchTerm, $options: "i" } },
			{ content: { $regex: searchTerm, $options: "i" } },
			{ email: { $regex: searchTerm, $options: "i" } },
		],
	})
		.then((questions) => {
			return questions;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

//
// {
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	name: {
// 		type: String,
// 		required: true,
// 	},
// 	title: {
// 		type: String,
// 		required: true,
// 	},
// 	answers: [{ type: String, required: true }],
// 	content: {
// 		type: String,
// 		required: true,
// 	},
// },
// {
// 	timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
// }

// add new answer to question
export const addAnswer = async (questionId, answer) => {
	return await QuestionModel.findByIdAndUpdate(questionId, {
		$push: { answers: answer },
	})
		.then((question) => {
			if (question) {
				return question;
			} else {
				throw new Error("Question not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
