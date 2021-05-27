var http = require('http');
var port = process.env.PORT || 3000;

http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Hello' + port);
}).listen(port);