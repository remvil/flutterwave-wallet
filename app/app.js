require('dotenv').config();
require("./config/db.config").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Logic here

module.exports = app;