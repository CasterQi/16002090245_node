
var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('ERROR 404:NOT FOUND')
    res.end('interesting')
}).listen(3000)
function asyncFun(args,callback){
    var result = args + 'aaaa';
    callback(result);
}

asyncFun("interesting",function(result){
    console.log(result);
})

var fs = require('fs')
var path = require('path')
var extName = '.js'
fs.readdir('/vue-devtools-master',function(err,files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        if(path.extname(file)==extName){
            console.log( file );

        }
        
    });
})