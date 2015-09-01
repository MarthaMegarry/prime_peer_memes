/**
 * Created by Mothra on 8/31/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var memes = require('../models/memes.json');
var messages = require('../models/messages.json');

/* GET meme listing. */

console.log(memes);
console.log(messages);

router.get('/', function(req, res, next) {
        //res.render(JSON.parse(data));
        res.render('memes', {memeobj: memes, messagesobj: messages});
});

module.exports = router;
