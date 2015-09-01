var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var memes = require('../models/memes.json');
var messages = require('../models/messages.json');


console.log(memes);
console.log(messages);

router.post('/', function(req, res, next){
    console.log(req.body);
    var newID = req.body.id;
    var newMessage = req.body.message;
    var file = path.join(__dirname, "../models/messages.json");


    fs.readFile(file, "UTF-8", function(err, data){
        if(err){
            console.log(err);
        } else {
            var obj = JSON.parse(data);
        }
        obj.push({"id": newID, "message": newMessage});

        fs.writeFile(file, JSON.stringify(obj), 'utf-8', function (err) {
            if (err) {
                console.log(err);
            } else {
            console.log('Wrote Data');
            }
        });
        res.send(obj);
    });

});

module.exports = router;