const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json("it works!");
});

module.exports = server;
