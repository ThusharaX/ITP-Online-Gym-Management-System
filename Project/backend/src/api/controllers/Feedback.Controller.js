import FeedbackService from "../services";

//insert a feedback
export const insertFeedback = async (request, response, next) => {
	await FeedbackService.insertFeedback(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//update a feedback
export const updateFeedback = async (request, response, next) => {
	await FeedbackService.updateFeedback(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//get all feedbacks
export const getAllFeedbacks = async (request, response, next) => {
	await FeedbackService.getAllFeedbacks()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

//Search feedbacks
export const searchFeedbacks = async (request, response, next) => {
	await FeedbackService.searchFeedbacks(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
