const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/multerConfig");
const sharpMiddleware = require("../middleware/sharpMiddleware");
const { getAllProducts, AddProducts } = require("../controllers/productControllers");

// Route to get all products
router.get("/allproducts", getAllProducts);

// Route to add a new product (admin only)
router.post(
  "/addProduct",
  verifyToken,
  roleMiddleware(['admin']),
  upload.single("image"),
  sharpMiddleware(),
  AddProducts
);

module.exports = router;
