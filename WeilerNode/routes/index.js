const express = require('express');
var path = require('path');


const router = express.Router();

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});



//requiring path and fs modules
path = require('path');
fs = require('fs');
//joining path of directory 
directoryPath = path.join(__dirname, '/..');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        
        if ((file.slice(file.indexOf("."))) == ".html"){
            router.get('/'+file, (req, res) => {
                res.sendFile(path.join(__dirname + '/../'+file));
            });
        } 
    });
});


module.exports = router;