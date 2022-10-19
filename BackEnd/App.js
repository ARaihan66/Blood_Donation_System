require('express-async-errors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('./ErrorHandler/errorHandler.js')

app.use(express.json());
app.use(cookieParser());

const user = require('./Routers/userRouter')

app.use('/api/user', user);

app.use(errorHandler);


module.exports = app;