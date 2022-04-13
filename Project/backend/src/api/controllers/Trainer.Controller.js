import TrainerService from "../services";
const joi = require("joi");
// const jwt = require("jsonwebtoken");
let trainers = require("../models/Trainer.model");

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

// const loginTrainers = async (req, res) => {
// const { error } = loginValidation(req.body);
// if (error) return res.status(400).send(error.details[0].message);
// const emailExist = await trainers.findOne({ email: req.body.email });
// if (!emailExist)
//   return res.status(400).send("Email or password is incorrect");
// const validPass = await bcrypt.compare(
//   req.body.password,
//   emailExist.password
// );
// if (!validPass) return res.status(400).send("Password is incorrect");
// const token = jwt.sign(
//   { _id: emailExist._id, type: "T" },
//   process.env.TOKEN_SECRET
// );
// res.cookie("jwt", token, { httpOnly: true, maxAge: 9999999 });
// res.header("auth-token", token).send(token);
// res.status(200).json({ success: true, token: token, user: emailExist._id });
// 	return {};
// };

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
	const uNameExist = await trainers.findOne({ uName: req.body.uName });
	if (uNameExist) return res.status(400).json({ success: false, msg: "Username already exists" });

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	const trainer = new trainers({
		fName: req.body.fName,
		lName: req.body.lName,
		uName: req.body.uName,
		nic: req.body.nic,
		dob: req.body.dob,
		email: req.body.email,
		gender: req.body.gender,
		address: req.body.address,
		pNumber: req.body.pNumber,
		Qualifications: req.body.Qualifications,
		expYears: req.body.expYears,
		password: hashedPassword,
	});
	await TrainerService.createTrainers(trainer)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

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
