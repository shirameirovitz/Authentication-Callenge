/* write your server code here */
const express = require('express');
const api = require('./router/api');
const users = require('./router/users');

const app = express();
app.use(express.json());

app.use('/api/v1', api);
app.use('/users', users);

module.exports = app;
