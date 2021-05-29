var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var path = require ('path');
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/images')))
var port = process.env.PORT || 3000;
var arr= [
   {'name':'WHO'},{'name':'WHAT'},{'name':'WHERE..'}
]

app.get('/', function (req, res) {
   res.render(__dirname + '/views/template.html', {'port':port, 'items': arr},);
});

var server = app.listen(port, function () {
   for(let item of arr) console.log(item.name)
   console.log('Node server is running..');
});