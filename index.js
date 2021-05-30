var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var path = require ('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/images')))
var port = process.env.PORT || 3000;
var arr= [
   {'name':'WHO'},{'name':'WHAT'},{'name':'Login'}
]

app.get('/', function (req, res) {
   res.render(__dirname + '/views/template.html', {'port':port, 'items': arr},);
});
app.get('/login', function (req, res) {
   res.render(__dirname + '/views/login.html', {'port':port, 'items': arr},);
});
app.post('/submit', function (req, res) {
   console.log(req.body);
   res.send("recieved your request!");
});
var server = app.listen(port, function () {
   for(let item of arr) console.log(item.name)
   console.log('Node server is running..');
});