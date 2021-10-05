const express = require('express');
const router = express.Router();
const { index, api, date } = require('../controllers/controller.js');

router.get('/', index);

router.get('/api', api);

router.get('/api/:date', date);

module.exports = router;