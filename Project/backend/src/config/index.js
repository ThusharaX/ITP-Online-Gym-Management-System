import dotenv from "dotenv";
dotenv.config();
const environment = process.env.NODE_ENV?.trim();
let configs;

if (environment == "Development") {
    configs = {
        ip: process.env.IP || "localhost",
		port: (process.env.PORT) || "5000",
        environment: process.env.DEV_ENVIRONMENT,
        mongodb: {
			uri: process.env.DEV_MONGO_URI,
        },
        // auth: {
		// 	secret: process.env.DEV_JWT_SECRET,
		// },
    };
}

export default configs;