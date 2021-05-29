var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var path = require ('path');
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/images')))
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
   res.render(__dirname + '/views/template.html', {'port':port});
});

var server = app.listen(port, function () {
   console.log('Node server is running..');
});