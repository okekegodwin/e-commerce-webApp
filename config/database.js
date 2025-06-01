require("dotenv").config();

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI

function connectToMongoDB() {
  mongoose.connect(MONGO_URI);

  mongoose.connection.on("connected", () => {
    console.log("connection to mongo database successful");
  })

  mongoose.connection.on("error", () => {
    console.log("connection to mongo database failed!");
  })
}

module.exports = connectToMongoDB