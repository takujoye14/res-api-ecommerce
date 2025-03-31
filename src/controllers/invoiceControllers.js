const Invoice = require("../models/invoiceModels");
const Product = require("../models/productModels");

exports.addInvoice = async (req, res) => {
    try {
      const { products } = req.body;
      let totalprice = 0;
      const productDetails = [];
  
      for (const item of products) {
        const product = await Product.findOne({ productName: item.productName });
        
        if (!product) {
          return res.status(404).json({ message: `Product "${item.productName}" not found.` });
        }
        
        totalprice += product.price * item.quantity;
        
        productDetails.push({
          productId: product._id,
          quantity: item.quantity
        });
      }
  
      const newInvoice = new Invoice({
        userId: req.userId,
        products: productDetails,
        totalprice
      });
  
      const savedInvoice = await newInvoice.save();
      res.status(201).json(savedInvoice);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.getUserInvoices = async (req, res) => {
    try {
      const invoices = await Invoice.find({ userId: req.userId })
        .populate('products.productId', 'productName price');
  
      const formattedInvoices = invoices.map(invoice => ({
        _id: invoice._id,
        userId: invoice.userId,
        products: invoice.products.map(item => ({
          productName: item.productId?.productName || "Deleted Product",
          quantity: item.quantity
        })),
        totalprice: invoice.totalprice,
        createdAt: invoice.createdAt,
        updatedAt: invoice.updatedAt
      }));
  
      res.status(200).json(formattedInvoices);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  