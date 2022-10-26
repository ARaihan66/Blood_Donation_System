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
const postNewsFeed = require('./Routers/postNewsFeedRouter');
const commentNewsFeed = require('./Routers/commentNewsFeedRouter');
const blood_search = require('./Routers/searchDonerRouter');

app.use('/api/user', user);
app.use('/api/post', userPost);
app.use('/api/comment', userComment);
app.use('/api/postNewsFeed', postNewsFeed);
app.use('/api/commentNewsFeed', commentNewsFeed);
app.use('/api/blood/search', blood_search);

app.use(errorHandler);


module.exports = app;