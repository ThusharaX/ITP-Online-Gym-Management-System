import NoticeModel from "../models/Notice.model";

// Insert a Notice
export const insertNotice = async (noticeData) => {
	return await NoticeModel.create(noticeData)
		.then(async (notice) => {
			await notice.save();
			return notice;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all notices
export const getAllNotices = async () => {
	return await NoticeModel.find({})
		.then((notices) => {
			return notices;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get a notice
export const getOneNotice = async (noticeId) => {
	return await NoticeModel.findById(noticeId)
		.then((notice) => {
			if (notice) {
				return notice;
			} else {
				throw new Error("Notice not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one notice
export const updateNotice = async (noticeId, noticeData) => {
	return await NoticeModel.findByIdAndUpdate(noticeId, noticeData, {
		new: true,
	})
		.then((notice) => {
			if (notice) {
				return notice;
			} else {
				throw new Error("Notice not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one notice
export const deleteNotice = async (noticeId) => {
	return await NoticeModel.findByIdAndDelete(noticeId)
		.then((notice) => {
			if (notice) {
				return notice;
			} else {
				throw new Error("Notice not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
