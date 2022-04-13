import pino from "pino";

const LOGGER = pino({
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
			translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
			ignore: "pid,hostname",
		},
	},
});

export default LOGGER;
