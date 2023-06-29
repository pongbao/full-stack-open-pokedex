const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.status(200).send("Application is healthy and running");
});

app.get("/version", (req, res) => {
  res.status(200).send("App Version: 3.0.1");
});

app.get("/", (req, res) => {
  res.status(200);
  /* eslint-disable no-console */
  console.log("http check OK");
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log("server started on port 5000");
});
