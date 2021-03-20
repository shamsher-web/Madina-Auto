var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
        fs.readFile('bike.html', function (error, data) {

            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();

        })

})

server.listen(5050);
console.log("server run successfull");