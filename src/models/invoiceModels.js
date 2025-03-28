const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const invoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quantity: { type: Number, required: true },
  description: [{ type: String, required: true }],
  totalprice: { type: Number, required: true },
}, { timestamps: true });

invoiceSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Invoice", invoiceSchema);
