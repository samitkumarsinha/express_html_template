var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res)=>{
  res.send('ok');
}).listen(port);
