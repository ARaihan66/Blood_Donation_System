const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const user = require('./Routers/userRouter')

app.use('/api/user', user);


module.exports = app;