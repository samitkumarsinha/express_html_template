var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var path = require ('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/images')));
var port = process.env.PORT || 3000;
const mongoose = require("mongoose");
var uri = 'mongodb+srv://samdb:unicorn1@cluster0.idow2.mongodb.net/school';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
var userschema = new mongoose.Schema({
   username: String,
   password: String,
   email: String,
   role: String
}
);
mongoose.connection.on('connected', (err, res) => {
   console.log('connnnnnn');
})


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
   var user = mongoose.model('users', userschema);
   user.find({}, function(err, data){
      console.log(data[0].email);
   });
   res.send("recieved your request!");
});
var server = app.listen(port, function () {
   for(let item of arr) console.log(item.name)
   console.log('Node server is running..');
});