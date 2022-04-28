import TrainerService from "../services";
const joi = require("joi");
// const jwt = require("jsonwebtoken");
let trainers = require("../models/Trainer.model");
import logger from "../../util/logger";
const bcrypt = require("bcryptjs");

const registerValidation = (data) => {
	const schema = joi.object({
		fName: joi.string().required().min(5).max(100),
		lName: joi.string().required().min(5).max(100),
		uName: joi.string().required().min(5).max(50),
		nic: joi.string().required().min(10).max(12),
		dob: joi.date().required(),
		email: joi.string().required().max(50).email(),
		gender: joi.string().required().max(1),
		address: joi.string().required().min(10).max(100),
		pNumber: joi.string().required().min(10).max(12),
		Qualifications: joi.required(),
		expYears: joi.number().required(),
		password: joi.string().required().min(8).max(50),
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

const createTrainers = async (req, res, next) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).json({ success: false, msg: error.details[0].message });

	const emailExist = await trainers.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).json({ success: false, msg: "Email already exists" });
	const nicExist = await trainers.findOne({ nic: req.body.nic });
	if (nicExist) return res.status(400).json({ success: false, msg: "NIC already exists" });
	const uNameExist = await trainers.findOne({ username: req.body.uName });
	if (uNameExist) return res.status(400).json({ success: false, msg: "Username already exists" });

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	const trainer = new trainers({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		nic: req.body.nic,
		dob: req.body.dob,
		email: req.body.email,
		gender: req.body.gender,
		address: req.body.address,
		phoneNumber: req.body.phoneNumber,
		qualifications: req.body.qualifications,
		permissionLevel: "TRAINER",
		password: hashedPassword,
	});
	await TrainerService.createTrainers(trainer)
		.then((data) => {
			logger.info(`New user with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Create user
// export const createUser = async (req, res, next) => {
// 	const user = {
// 		firstName: req.body.firstName,
// 		lastName: req.body.lastName,
// 		nic: req.body.nic,
// 		phoneNumber: req.body.phoneNumber,
// 		email: req.body.email,
// 		username: req.body.username,
// 		password: req.body.password,
// 		permissionLevel: req.body.permissionLevel,
// 	};

// 	await UserService.insertUser(user)
// 		.then((data) => {
// 			logger.info(`New user with ID ${data._id} created`);
// 			req.handleResponse.successRespond(res)(data);
// 			next();
// 		})
// 		.catch((error) => {
// 			logger.error(error.message);
// 			req.handleResponse.errorRespond(res)(error.message);
// 			next();
// 		});
// };

const updateTrainers = async (req, res, next) => {
	await TrainerService.updateTrainers(req.params.id, req.body)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

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
	// loginTrainers,
	getTrainer,
	getTrainers,
	createTrainers,
	updateTrainers,
	deleteTrainers,
};
