const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

const cors = require("cors");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const invoicesRoutes = require("./routes/invoices");

app.use(cors({
  origin: [
    'https://solesupply.netlify.app',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}))

app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

connectDB()

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/invoices", invoicesRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

module.exports = app