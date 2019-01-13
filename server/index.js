const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const APP = express();
const ROUTER = require('./routes/router');
const PORT = process.env.SERVER_PORT || 8000;

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(cors());

APP.use("/api/", ROUTER);

APP.listen(PORT, () => console.log(`Express listening on port ${PORT}`));