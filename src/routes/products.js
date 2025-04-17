const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const roleMiddleware = require("../middleware/rolemiddleware");
const upload = require("../middleware/multerConfig");
const sharpMiddleware = require("../middleware/sharpMiddleware");
const { getAllProducts, AddProducts, deleteProduct} = require("../controllers/productControllers");


router.get('/allproducts', verifyToken, getAllProducts)

router.post(
  '/addProduct',
  verifyToken,
  roleMiddleware(['admin']),
  upload.array('images'),         
  sharpMiddleware(),                
  AddProducts
)


router.delete(
  "/delete/:id",
  verifyToken,
  roleMiddleware(["admin"]),
  deleteProduct
);
module.exports = router;
