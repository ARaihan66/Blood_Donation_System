const express = require('express');
const { authenticatedUser } = require('../Authentication/authentication');
const { createComment, updateComment, deleteComment } = require('../Controllers/commentController.js');
const router = express.Router();

router.route('/create')
    .post(authenticatedUser, createComment)

router.route('/update')
    .put(authenticatedUser, updateComment)

router.route('/delete/:id')
    .delete(authenticatedUser, deleteComment)

module.exports = router;