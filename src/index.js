const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const path = require("path");
const productRoutes = require("./routes/products");
const invoicesRoutes = require("./routes/invoices");
const cors = require("cors");

app.use(cors({
  origin: ['https://the-vaultexclusive.netlify.app'],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/invoices", invoicesRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

module.exports = app;