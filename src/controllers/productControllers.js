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
    const { productName, description, price, brand } = req.body

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'Images are required' })
    }

    const imageUrls = req.body.imageUrl || []

    const newProduct = new Product({
      productName,
      description,
      price,
      brand,
      imageUrl: imageUrls
    })

    await newProduct.save()

    res.status(201).json({ message: 'Product added successfully', product: newProduct })
  } catch (error) {
    console.error('Add product failed:', error)
    res.status(500).json({ message: 'Failed to add product' })
  }
}

exports.editProduct = async (req, res) => {
  const { productName, description, price } = req.body;
  const productId = req.params.id;

  try {
    const imageUrls = req.body.imageUrl || []; 

    const update = {
      productName,
      description,
      price,
    };

    if (imageUrls.length > 0) {
      update.imageUrl = imageUrls;
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, update, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error("Edit error:", err);
    res.status(500).json({ message: "Failed to edit product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error });
  }
};


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