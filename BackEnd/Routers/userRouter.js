const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const { createAccount, userLogin, userLogout, userProfile, updateProfile } = require("../Controllers/userController");
const router = express.Router();

router.route('/create/account')
    .post(createAccount)

router.route('/login')
    .post(authenticatedUser, userLogin)

router.route('/logout')
    .post(authenticatedUser, userLogout)

router.route('/profile/me')
    .post(authenticatedUser, userProfile)

router.route('/update/profile')
    .post(authenticatedUser, updateProfile)


module.exports = router;

