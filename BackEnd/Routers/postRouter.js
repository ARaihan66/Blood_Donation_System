const express = require('express');
const { authenticatedUser } = require('../Authentication/authentication');
const { createPost, updatePost, deletePost } = require('../Controllers/postController.js');
const router = express.Router();

router.route("/create/:token")
    .post(authenticatedUser, createPost)
//.post(createPost)

router.route('/update')
    .put(authenticatedUser, updatePost)

router.route('/delete/:id')
    .delete(authenticatedUser, deletePost)

module.exports = router;