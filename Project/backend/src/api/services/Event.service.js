let events = require("../models/Event.model");

export const getEvent = async (id) => {
	return await events
		.findById(id)
		.then((event) => {
			if (event) {
				return event;
			} else {
				throw new Error("Event not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const getEvents = async (search, trainer) => {
	/////////SEARH EVENTS BY TITLE//////
	if (search) {
		var xt = new RegExp(search);
		return await events
			.find({ title: xt })
			.then((newEvent) => {
				return newEvent;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	/////////SORT EVENTS BY TRAINER//////
	if (trainer) {
		return await events
			.find()
			.then(async (newEvent) => {
				return await newEvent.filter((event) => event.trainer == trainer);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	} else {
		return await events
			.find()
			.then((newEvent) => {
				return newEvent;
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
};

const createEvents = async (event) => {
	return await event
		.save()
		.then(async (savedEvent) => {
			await savedEvent.save();
			return savedEvent;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const updateEvents = async (id, body) => {
	return await events
		.updateOne({ _id: id }, { $set: body })
		.then((updatedEvent) => {
			if (updatedEvent) {
				return updatedEvent;
			} else {
				throw new Error("Event not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

const deleteEvents = async (id) => {
	return await events
		.deleteOne({ _id: id })
		.then((removedEvent) => {
			if (removedEvent) {
				return removedEvent;
			} else {
				throw new Error("Event not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

module.exports = {
	updateEvents,
	deleteEvents,
	createEvents,
	getEvent,
	getEvents,
};
