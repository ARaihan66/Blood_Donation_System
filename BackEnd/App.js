require('express-async-errors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('./ErrorHandler/errorHandler.js')

app.use(express.json());
app.use(cookieParser());

const user = require('./Routers/userRouter');
const userPost = require('./Routers/postRouter');
const userComment = require('./Routers/commentRouter');
const newsFeed = require('./Routers/newsFeedRouter');

app.use('/api/user', user);
app.use('/api/post', userPost);
app.use('/api/comment', userComment);
app.use('/api/newsFeed', newsFeed);

app.use(errorHandler);


module.exports = app;