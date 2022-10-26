const express = require('express');
const router = express.Router();

const { specificBloodHolder } = require('../Controllers/searchDonerController');

router.route('/')
    .get(specificBloodHolder)

module.exports = router;