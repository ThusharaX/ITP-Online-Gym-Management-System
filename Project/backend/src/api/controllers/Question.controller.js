import QuestionService from "../services";

//insert a question
export const insertQuestion = async (request, response, next) => {
	await QuestionService.insertQuestion(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//update a question
export const updateQuestion = async (request, response, next) => {
	await QuestionService.updateQuestion(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//delete one question
export const deleteQuestion = async (request, response, next) => {
	await QuestionService.deleteQuestion(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//get all questions
export const getAllQuestions = async (request, response, next) => {
	await QuestionService.getAllQuestions()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//Search questions
export const searchQuestions = async (request, response, next) => {
	await QuestionService.searchQuestions(request.params.search)

		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//add a answer
export const addAnswer = async (request, response, next) => {
	await QuestionService.addAnswer(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
