var http = require('http');
var port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://samdb:unicorn1@cluster0.idow2.mongodb.net/samnode";
function getData(res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("school");
        dbo.collection("users").find({}).limit(2).toArray(function(err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
        db.close();
        });
    });
}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    getData(res);
}).listen(port);