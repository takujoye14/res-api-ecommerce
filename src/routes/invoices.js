const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { addInvoice, getUserInvoices } = require("../controllers/invoiceControllers");

router.post("/addInvoice", verifyToken, addInvoice);
router.get("/myInvoices", verifyToken, getUserInvoices);

module.exports = router;
