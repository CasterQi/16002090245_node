
var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('ERROR 404:NOT FOUND')
    res.end('interesting')
}).listen(3000)