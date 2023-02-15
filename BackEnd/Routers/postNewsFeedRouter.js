const express = require('express');
const router = express.Router();
const { authenticatedUser } = require('../Authentication/authentication');

const { postNewsFeed } = require('../Controllers/postNewsFeedController');

router.route('/:token')
    .get(authenticatedUser, postNewsFeed)

module.exports = router;