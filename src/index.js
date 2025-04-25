const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const path = require("path")
const productRoutes = require("./routes/products");
const invoicesRoutes = require("./routes/invoices");
app.use(express.json());

const cors = require("cors");

app.use(cors({
    origin: ['https://solesupply.netlify.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))
  
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/invoices", invoicesRoutes);






app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get("/", (req, res) => {
    res.send("Home page")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


