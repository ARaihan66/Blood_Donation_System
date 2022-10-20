const express = require('express');
const router = express.Router();

const { commentNewsFeed } = require('../Controllers/commentNewsFeedController');

router.route('/')
    .get(commentNewsFeed)

module.exports = router;