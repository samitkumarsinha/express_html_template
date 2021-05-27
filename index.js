var http = require('http');
var dt = require('./datemodule');
var port = process.env.PORT || 3000;

http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.write(req.url);
    res.end('Time now >> ' + dt.mydate());
    
}).listen(port);