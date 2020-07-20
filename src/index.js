const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoder({ extended: false }));

require('./app/controller/authController')(app);

app.listen(4080);