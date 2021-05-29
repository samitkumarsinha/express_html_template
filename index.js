var express = require('express');
var app = express();
app.set('view engine', 'jade');
var path = require ('path');
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/images')))
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/views/template.html');
});

var server = app.listen(port, function () {
   console.log('Node server is running..');
});