'use strict';

var _express = require('express');

var _bodyParser = require('body-parser');

var _path = require('path');

var app = _express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(3000, function () {
    console.log("App is running on port 3000!!!");
});