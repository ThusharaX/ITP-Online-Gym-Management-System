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
}


//update a question
export const updateQuestion = async (questionId, questionData) => {
  return await QuestionModel.findByIdAndUpdate(questionId, questionData, { new: true })
    .then((question) => {
      if (question) {
        return question;
      } else {
        throw new Error("Question not found");
      }
    }
    )
    .catch((error) => {
      throw new Error(error.message);
    });
}


// delete one question
export const deleteQuestion = async (questionId) => {
  return await QuestionModel.findByIdAndRemove(questionId)
    .then((question) => {
      if (question) {
        return question;
      } else {
        throw new Error("Question not found");
      }
    }
    )
    .catch((error) => {
      throw new Error(error.message);
    });
}


// get all questions
export const getAllQuestions = async () => {
  return await QuestionModel.find({})
    .then((questions) => {
      return questions;
    }
    )
    .catch((error) => {
      throw new Error(error.message);
    });
};
