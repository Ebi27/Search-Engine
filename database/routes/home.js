const client = require("../connection");
const express = require("express");
const homeRouter = express.Router();



homeRouter.get("/", (req, res) =>{
  res.render("/views/index.html");
});