const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    next();
    console.log(token);
};
