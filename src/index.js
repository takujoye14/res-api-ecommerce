const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const path = require("path")

app.use(express.json());







connectDB();
app.use("/api/users", userRoutes);

// cors middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get("/", (req, res) => {
    res.send("Home page")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

