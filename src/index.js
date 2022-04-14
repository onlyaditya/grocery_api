const express = require("express");
const app = express();
app.use(express.json());

const itemController = require("./controllers/item.controller");

app.use("/items", itemController);

module.exports = app;
