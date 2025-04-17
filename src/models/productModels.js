const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { array } = require("../middleware/multerConfig");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand:{ 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
}, { timestamps:true });

productSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Product", productSchema);
