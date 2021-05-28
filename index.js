var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/hello', (req, res)=>{
  res.send('ok get');
})
app.post('/hello', (req, res)=>{
  res.send('ok post');
})
app.listen(port);
