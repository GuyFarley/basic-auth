'use strict';

const express = require('express');
const authRouter = require('./auth/router');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('server running on', PORT)),
};

