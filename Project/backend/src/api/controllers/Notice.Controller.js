import NoticeService from "../services";

// Insert a notice
export const insertNotice = async (request, response, next) => {
	await NoticeService.insertNotice(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all notices
export const getAllNotices = async (request, response, next) => {
	await NoticeService.getAllNotices()
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one notice
export const getOneNotice = async (request, response, next) => {
	await NoticeService.getOneNotice(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one notice
export const updateNotice = async (request, response, next) => {
	await NoticeService.updateNotice(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one notice
export const deleteNotice = async (request, response, next) => {
	await NoticeService.deleteNotice(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
