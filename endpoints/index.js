const timeouturl = require('./timeout.url');
const resulturl = require('./result.url');
const express = require('express');
const router = express.Router();

router.use('/timeout',timeouturl);
router.use('/result', resulturl);

module.exports = router;