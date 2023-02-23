require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api/coffee', require('./routes/coffee'));
module.exports = app
