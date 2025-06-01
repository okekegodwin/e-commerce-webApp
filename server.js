require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/database");

const app = express();

const PORT = process.env.PORT;

const homeRoute = require("./routes/index.route");
const productRoute = require("./routes/product.route")


// middlewares 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// my app routes
app.use("/", homeRoute);
app.use("/admin", productRoute);


// connecting to database
connectDB();



app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message })
})


app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});