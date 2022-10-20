const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const { createPost } = require('../Controllers/postController.js');
const router = express.Router();

router.route('/create').post(authenticatedUser, createPost)

module.exports = router;