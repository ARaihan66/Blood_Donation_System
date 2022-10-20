const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const { createPost, updatePost } = require('../Controllers/postController.js');
const router = express.Router();

router.route('/create')
    .post(authenticatedUser, createPost)

router.route('/update')
    .post(authenticatedUser, updatePost)

module.exports = router;