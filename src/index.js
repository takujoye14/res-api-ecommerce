const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

const connectDB = require("./utils/db");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const invoicesRoutes = require("./routes/invoices");

const cors = require('cors')

app.use(cors({
  origin: ['https://the-vaultexclusive.netlify.app/'], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


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