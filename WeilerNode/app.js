const express = require('express');
const routes = require('./routes/index');

const app = express();
app.use('/', routes, express.static("public"));
app.set("view engine", "ejs");
module.exports = app;