const express = require('express');
const router = express.Router();

const { postNewsFeed } = require('../Controllers/postNewsFeedController');

router.route('/')
    .get(postNewsFeed)

module.exports = router;