const express = require("express");
const services = require("./../controllers/");
const validate = require("./../middlewares/validate");
const ROUTER = express.Router();

ROUTER.get("/", validate, services.t9Convert);

module.exports = ROUTER;