const timeouturl = require('./timeout.url');
const resulturl = require('./result.url');
const express = require('express');
const router = express.Router();

router.use('/b2c/timeout',timeouturl);
router.use('/b2c/result', resulturl);

module.exports = router;