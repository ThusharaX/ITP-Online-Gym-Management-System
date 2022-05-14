import dotenv from "dotenv";
dotenv.config();
const environment = process.env.NODE_ENV?.trim();
let configs;

if (environment == "Development") {
	configs = {
		ip: process.env.IP || "localhost",
		port: process.env.PORT || "5000",
		environment: process.env.DEV_ENVIRONMENT,
		mongodb: {
			uri: process.env.DEV_MONGO_URI,
		},
		// auth: {
		// 	secret: process.env.DEV_JWT_SECRET,
		// },
		MAIL_FROM: process.env.MAIL_FROM,
		MAIL_HOST: process.env.MAIL_HOST,
		MAIL_PORT: process.env.MAIL_PORT,
		MAIL_USER: process.env.MAIL_USER,
		MAIL_PASS: process.env.MAIL_PASS,
	};
}

export default configs;
