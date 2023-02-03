const express = require('express');
const { authenticatedUser, authorizeRole } = require('../Authentication/authentication');
const {
    createOtp,
    createAccount,
    userLogin,
    userLogout,
    userProfile,
    updateProfile,
    updatePassword,
    getAllUser,
    getSingleUser,
    forgetPassword,
    resetPassword,
    donationDate
} = require("../Controllers/userController");
const router = express.Router();

router.route('/create/otp')
    .post(createOtp)

router.route('/create/account')
    .post(createAccount)


router.route('/login')
    .post(userLogin)

router.route('/logout')
    .post(userLogout)

router.route('/profile/me')
    .get(authenticatedUser, userProfile)

router.route('/update/profile')
    .put(authenticatedUser, updateProfile)

router.route('/update/password')
    .put(authenticatedUser, updatePassword)

router.route('/forget/password')
    .post(forgetPassword)

router.route('/reset/password')
    .put(resetPassword)

router.route('/all/users')
    .get(authenticatedUser, authorizeRole('admin'), getAllUser)

router.route('/single/:id')
    .get(authenticatedUser, authorizeRole('admin'), getSingleUser)

router.route('/donation')
    .post(authenticatedUser, donationDate)


module.exports = router;

