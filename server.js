require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

const homeRoute = require("./routes/index");



// my app routes
app.use("/", homeRoute);






app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message })
})


app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});