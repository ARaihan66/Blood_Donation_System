const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const { createAccount, userLogin, userLogout } = require("../Controllers/userController");
const router = express.Router();

router.route('/create/account')
    .post(createAccount)

router.route('/login')
    .post(authenticatedUser, userLogin)

router.route('/logout')
    .post(authenticatedUser, userLogout)


module.exports = router;

