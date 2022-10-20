const express = require('express');
const router = express.Router();

const { getNewsFeed } = require('../Controllers/newsFeedController');

router.route('/')
    .get(getNewsFeed)

module.exports = router;