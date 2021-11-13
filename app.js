require(dotenv).config();
require("./config/database").connect();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Logic here

module.exports = app;