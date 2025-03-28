const express = require("express");
const router = express.Router();
const { hashPassword } = require("../middleware/encryption");
const { userLogin, userSignUp } = require("../controllers/userControllers");
const { verifyToken } = require("../middleware/auth");
const upload = require("../middleware/multerConfig");
const sharpMiddleware = require("../middleware/sharpMiddleware");

router.post("/login", userLogin);

router.post("/signup", hashPassword, userSignUp);

router.put("/userUpdate", verifyToken, upload.single("image"), sharpMiddleware(), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File upload error." });
  }

  const fileUrl = req.protocol + "://" + req.get("host") + "/" + req.file.processedPath;
  res.json({ message: "User updated", fileUrl });
});

module.exports = router;
