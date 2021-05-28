var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/hello', (req, res)=>{
  res.send('ok');
})
app.get('/hello', (req, res)=>{
  res.send('ok');
})
app.listen(port);
