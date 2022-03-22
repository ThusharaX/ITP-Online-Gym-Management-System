import generateToken from "../../util/generateToken";
import AdminService from "../services";
import logger from "../../util/logger";
import Admin from "../models/Admin.model";

export const authAdmin = async (request, response, next) => {
    const { username, password } = request.body;

    if (username && password) {
        await AdminService.authAdmin(username, password)
            .then(async (admin) => {
                const authToken = await generateToken(admin._id);
                const data = {
                    _id: admin._id,
                    name: admin.name,
                    username: admin.username,
                    token: authToken,
                };

                request.handleResponse.successRespond(response)(data);
            })
            .catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
            });
        } else {
            logger.error("Username or Password is missing");
            request.handleResponse.errorRespond(response)("Username or Password is missing");
            next();
        }
};


// Create admin
export const createAdmin = async (req, res) => {
    const { name, username, password } = req.body;

    const admin = new Admin({
        name,
        username,
        password,
    });

    await admin.save();

    res.json({
        _id: admin._id,
        name: admin.name,
        username: admin.username,
        token: generateToken(admin._id),
    });
}