const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");

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

app.get("/", (req, res) => {
    res.send("Home page")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

