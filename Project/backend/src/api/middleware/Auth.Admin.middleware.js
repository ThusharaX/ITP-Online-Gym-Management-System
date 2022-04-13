const jwt = require("jsonwebtoken");
import logger from "../../util/logger";
const Admin = require("../models/Admin.model");

export const adminAuthenticate = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
				const authToken = request.headers.authorization.split(" ")[1];
				const decode = jwt.verify(authToken, secret);
				const admin = await Admin.findById(decode.id).select("-password");

				if (!admin) {
					const useNotFoundResponse = JSON.stringify({
						status: 401,
						message: "Admin not found in the system",
					});
					throw new Error(useNotFoundResponse);
				}

				request.authToken = authToken;
				request.admin = admin;

				logger.info(`Authentication Token for ID ${admin._id} is Accepted`);
				next();
			} else {
				response.status(401);
				throw new Error("Not authorized, no token");
			}
		} else {
			throw new Error("Token Secret is not found");
		}
	} catch (error) {
		logger.warn(error.message);
		return request.handleResponse.unauthorizedRespond(response)(error.message);
	}
};
