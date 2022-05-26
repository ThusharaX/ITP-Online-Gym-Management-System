import TrainerService from "../services";

const joi = require("joi");
let users = require("../models/User.model");
import logger from "../../util/logger";

const registerValidation = (data) => {
	const schema = joi.object({
		firstName: joi.string().required().min(5).max(100),
		lastName: joi.string().required().min(5).max(100),
		username: joi.string().required().min(5).max(50),
		nic: joi.string().required().min(10).max(12),
		dob: joi.date().required(),
		email: joi.string().required().max(50).email(),
		gender: joi.any().allow("Male", "Female"),
		address: joi.string().required().min(10).max(100),
		phoneNumber: joi.string().required().min(10).max(12),
		qualifications: joi.required(),
		password: joi.string().required().min(8).max(50),
		avatar: joi.string().required(),
	});
	return schema.validate(data);
};

const getTrainer = async (req, res, next) => {
	await TrainerService.getTrainer(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

const getTrainers = async (req, res, next) => {
	await TrainerService.getTrainers(req.query.search)
		.then(async (data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Create Trainer
export const createTrainer = async (req, res, next) => {
	const { error } = registerValidation(req.body);
	if (error) {
		logger.error(error.message);
		req.handleResponse.errorRespond(res)(error.message);
		next();
	} else if (await users.findOne({ email: req.body.email })) {
		req.handleResponse.errorRespond(res)("Email already exists");
		next();
	}
	// return res.status(400).json({ success: false, msg: "Email already exists" });
	else if (await users.findOne({ nic: req.body.nic })) {
		req.handleResponse.errorRespond(res)("NIC already exists");
		next();
	}
	// return res.status(400).json({ success: false, msg: "NIC already exists" });
	else if (await users.findOne({ username: req.body.username })) {
		req.handleResponse.errorRespond(res)("Username already exists");
		next();
	}

	// return res.status(400).json({ success: false, msg: "Username already exists" });
	else {
		const trainer = {
			avatar: req.body.avatar,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			nic: req.body.nic,
			dob: req.body.dob,
			username: req.body.username,
			phoneNumber: req.body.phoneNumber,
			email: req.body.email,
			gender: req.body.gender,
			trainername: req.body.trainername,
			password: req.body.password,
			address: req.body.address,
			qualifications: req.body.qualifications,
			permissionLevel: "TRAINER",
		};

		await TrainerService.insertUser(trainer)
			.then((data) => {
				logger.info(`New trainer with ID ${data._id} created`);
				req.handleResponse.successRespond(res)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				req.handleResponse.errorRespond(res)(error.message);
				next();
			});
	}
};

const updateTrainer = async (req, res, next) => {
	await TrainerService.updateTrainers(req.params.id, req.body)
		.then((data) => {
			logger.info(`Updated trainer with ID ${data._id}`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

//to be implemented somehow
const deleteTrainers = async (req, res, next) => {
	await TrainerService.deleteTrainers({ _id: req.params.id })
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

module.exports = {
	getTrainer,
	getTrainers,
	createTrainer,
	updateTrainer,
	deleteTrainers,
};
