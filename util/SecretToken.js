const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: "3d", // Use a string value for better readability
    });
};
