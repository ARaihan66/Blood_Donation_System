const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const {
    createAccount,
    userLogin,
    userLogout,
    userProfile,
    updateProfile,
    updatePassword,
    getAllUser,
    getSingleUser
} = require("../Controllers/userController");
const router = express.Router();

router.route('/create/account')
    .post(createAccount)

router.route('/login')
    .post(userLogin)

router.route('/logout')
    .post(authenticatedUser, userLogout)

router.route('/profile/me')
    .get(authenticatedUser, userProfile)

router.route('/update/profile')
    .put(authenticatedUser, updateProfile)

router.route('/update/password')
    .put(authenticatedUser, updatePassword)

router.route('/all/users')
    .get(authenticatedUser, authorizeRole('admin'), getAllUser)

router.route('/single/user')
    .get(authenticatedUser, authorizeRole('admin'), getSingleUser)

module.exports = router;

