const express = require("express");
const router = express.Router();
const {hashPassword} = require("../middleware/encryption");
const { userLogin, userSignUp } = require("../controllers/userControllers");

router.get("/", userLogin);

router.post("/", hashPassword, userSignUp);

module.exports = router;