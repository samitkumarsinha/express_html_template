var http = require('http');
// var dt = require('./datemodule');
var port = process.env.PORT || 3000;
var nodemailer = require('nodemailer');

function send_mail(res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'samitkumarsinha@gmail.com',
          pass: 'nnxcsalbgpfrrlrd'
        }
      });
      
      var mailOptions = {
        from: 'samitkumarsinha@gmail.com',
        to: 'samitkumarsinha@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.end('Error');
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Email sent: ' + info.response);
        }
      });
}
http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    send_mail(res);
    
}).listen(port);