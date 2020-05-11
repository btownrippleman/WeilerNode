const express = require('express');
var path = require('path');


const router = express.Router();

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});
router.get('/cards.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/../cards.html'));
});


module.exports = router;