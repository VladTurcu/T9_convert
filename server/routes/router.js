const express = require("express");
const services = require("./../controllers/");
const ROUTER = express.Router();

ROUTER.get("/", services.t9Convert);

module.exports = ROUTER;