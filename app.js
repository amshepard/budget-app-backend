// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("BUDGTR 💰🧾");
});

// EXPORT
module.exports = app;

