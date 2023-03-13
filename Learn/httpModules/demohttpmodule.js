var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    // req: represents the request from the clint as an object (http.IncomingMessage object)
    res.writeHead(200,{'Content-type':'text/html'})
    // url: the part of the url that comes after the domain name
    var q = url.parse(req.url, true).query;
    console.log(q)
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080)