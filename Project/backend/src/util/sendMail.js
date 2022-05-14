import configs from "../config";
import nodemailer from "nodemailer";

const sendMail = async (data) => {
	// eslint-disable-next-line no-console
	console.log(data);

	const transporter = nodemailer.createTransport({
		host: configs.MAIL_HOST,
		port: configs.MAIL_PORT,
		auth: {
			user: configs.MAIL_USER,
			pass: configs.MAIL_PASS,
		},
	});
	const mailOptions = {
		from: "'Mansa Fitness 🏋️' <admin@mansafit.com>",
		to: data.email,
		subject: data.subject,
		html: data.html,
	};
	await transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			// eslint-disable-next-line no-console
			console.log(err);
		} else {
			// eslint-disable-next-line no-console
			console.log(info);
		}
	});
};

export default sendMail;
