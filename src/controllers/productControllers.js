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
    const imageUrl = req.body.imageUrls || req.body.imageUrl; 

    const newProduct = new Product({
      productName,
      brand,
      category,
      description,
      imageUrl,
      price,
      stock,
    });
    

    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}



exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}