var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var memes = require('../models/memes.json');
var messages = require('../models/messages.json');

/* GET meme listing. */

console.log(memes);
console.log(messages);

router.post('/id?', function(req, res, next) {
    //res.render(JSON.parse(data));
    fs.appendFile('messages', messages);
});
module.exports = router;