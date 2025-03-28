const Product = require("../models/productModels");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.AddProducts = async (req, res) => {
  try {
    const { productName, brand, description, price, stock, category } = req.body;
    const imageUrl = req.file ? req.protocol + "://" + req.get("host") + "/" + req.file.processedPath : null;

    const newProduct = new Product({
      productName,
      brand,
      category,
      description,
      imageUrl: imageUrl ? [imageUrl] : [],
      price,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
