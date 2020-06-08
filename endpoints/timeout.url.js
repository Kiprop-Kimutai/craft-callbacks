const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.post('/', (req, res) => {
    fs.appendFile(path.join('', 'timeout.txt'), JSON.stringify(req.body), (err) => {
        if (err)
            console.error(err);
        console.log('Data written to file...');
    })
});
module.exports = router;