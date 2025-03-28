const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

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
    imageUrl: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Array,
        required: true,
    },
},
{timestamps:true}
);

productSchema.plugin(uniqueValidator);
module.exports = mongoose.model("productSchema", productSchema);