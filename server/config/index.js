const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const path = require('path')
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(express.static(path.join(__dirname, '..', "public")))

};