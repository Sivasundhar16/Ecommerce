const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error.js");

app.use(express.json());

const products = require("./routes/product.js");

app.use("/api/v1/", products);
app.use(errorMiddleware);

module.exports = app;
