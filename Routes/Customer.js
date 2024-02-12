const Router = require('express').Router();
const Customer = require('../Model/Customer');

const express = require('express');
const registerItem = require('../Controller/Customer');
const router = express.Router();

router.route('/registerOrder').post(registerItem);

module.exports = router;
