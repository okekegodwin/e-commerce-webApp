const express = require("express");

const app = express();

const homeRoute = require("./routes/index");



// my app routes
app.use("/", homeRoute);









app.listen(8000, () => {
  console.log("App is listening on http://localhost:8000")
});