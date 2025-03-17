const mongoose = require("mongoose")

const mongoConnection = "mongodb://atlas-sql-67c72eaf50cc3f3bf930205a-3ijkl.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin"

mongoose.set("strictQuery", true)

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnection)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("No DB connection!", error)
    process.exit(1) // Exit process with failure
  }
}

module.exports = connectDB;