const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const Invoice = require('../models/invoiceModels');

router.get('/my-invoices', verifyToken, async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.userId });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
