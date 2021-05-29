var express = require('express');
var app = express();
app.set('view engine', 'jade');
var path = require ('path');
// app.use('/static', express.static(path.join(__dirname, 'views')))

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {

   res.sendFile(__dirname + '/views/template.html');

});

var server = app.listen(port, function () {
   console.log('Node server is running..');
});