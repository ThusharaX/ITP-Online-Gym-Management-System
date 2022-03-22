import Admin from "../models/Admin.model";

export const authAdmin = async (username, password) => {
    return await Admin.findOne({ username })
        .then(async (admin) => {
            if (admin && (await admin.matchPassword(password))) {
                return {
                    _id: admin._id,
                    name: admin.name,
                    username: admin.username
                }
            }
            else {
                throw new Error("Invalid Email or Password!");
            }
    })
    .catch((error) => {
        throw new Error(error.message);
    });
};