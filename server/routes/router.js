const express = require("express");
const service = require("./../controllers/converter");
const ROUTER = express.Router();

ROUTER.get("/", service.t9Convert);

module.exports = ROUTER;