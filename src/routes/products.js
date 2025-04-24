const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/multerConfig");
const sharpMiddleware = require("../middleware/sharpMiddleware");
const { getAllProducts, AddProducts, deleteProduct, editProduct, getProductById } = require("../controllers/productControllers");

router.get("/allproducts", verifyToken, getAllProducts);

router.post(
  "/AddProducts",
  verifyToken,
  roleMiddleware(['user', 'admin']),
  upload.array("images"),
  sharpMiddleware(),
  AddProducts
);

router.put(
  "/edit/:id",
  verifyToken,
  roleMiddleware(['user', 'admin']),
  upload.array("images"),
  sharpMiddleware(),
  editProduct
);

router.delete("/delete/:id", verifyToken, roleMiddleware(['user']), deleteProduct);

router.get("/:id", getProductById);

module.exports = router;
