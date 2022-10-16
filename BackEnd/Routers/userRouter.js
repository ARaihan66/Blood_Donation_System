const express = require('express');
const { createAccount } = require("../Controllers/userController");
const router = express.Router();

router.route('/create/account')
    .post(createAccount)


module.exports = router;

