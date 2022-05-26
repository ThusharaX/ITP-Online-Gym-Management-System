import EventService from "../services";
const joi = require("joi");
let events = require("../models/Event.model");
import sendMail from "../../util/sendMail";

const eventValidation = (data) => {
	const schema = joi.object({
		title: joi.string().required().min(5).max(100),
		tags: joi.required(),
		description: joi.string().required().min(15).max(300),
		details: joi.string().required().min(5),
		gender: joi.string().required().length(4),
		date: joi.date().required(),
		trainer: joi.string().required().min(23).max(25),
		users: joi.required(),
		url: joi.required(),
	});

	return schema.validate(data);
};

const getEvent = async (req, res, next) => {
	await EventService.getEvent(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const getEvents = async (req, res, next) => {
	await EventService.getEvents(req.query.search, req.query.trainer)
		.then(async (data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const createEvents = async (req, res, next) => {
	const { error } = eventValidation(req.body);
	if (error) return res.status(400).json({ success: false, msg: error.details[0].message });
	const event = new events({
		title: req.body.title,
		tags: req.body.tags,
		description: req.body.description,
		details: req.body.details,
		gender: req.body.gender,
		date: req.body.date,
		trainer: req.body.trainer,
		users: req.body.users,
		url: req.body.url,
	});
	await EventService.createEvents(event)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			EventService.getTrainer(data.trainer).then((trainer) => {
				sendMail({
					email: [trainer.email],
					subject: "New Event Added",
					html: `
					<h1>${data.title}</h1>
					<h4>Date & Time: ${data.date.toString().slice(3, 21)}</h4>
					<p>${data.description}</p>
				`,
				});
			});

			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const updateEvents = async (req, res, next) => {
	await EventService.updateEvents(req.params.id, req.body)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const deleteEvents = async (req, res, next) => {
	await EventService.getEvent(req.params.id)
		.then((event) => {
			EventService.deleteEvents(req.params.id).then((data) => {
				req.handleResponse.successRespond(res)(data);
				EventService.getTrainer(event.trainer).then((trainer) => {
					sendMail({
						email: [trainer.email],
						subject: "Event Deleted",
						html: `
					<h1>${event.title}</h1>
					<h4>Date & Time: ${event.date.toString().slice(3, 21)}</h4>
					<p>${event.description}</p>
				`,
					});
				});
				next();
			});
		})

		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

module.exports = {
	getEvent,
	getEvents,
	createEvents,
	updateEvents,
	deleteEvents,
};
