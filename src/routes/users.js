const express = require("express");
const router = express.Router();
const {hashPassword} = require("../middleware/encryption");
const { userLogin, userSignUp } = require("../controllers/userControllers");
const { verifyToken } = require("../middleware/auth");

router.post("/login", userLogin);

router.post("/signup", hashPassword, userSignUp);

router.post("test" ,verifyToken, (req, res) => { res.send("test")});

module.exports = router;