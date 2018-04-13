const http = require('http');
const fs = require('fs');

var server = http.createServer(
    function(req,res) {
  
        if (req.url === '/home' || req.url === '/') {
            res.writeHead(200, {'Content-type' : 'text/html'});
            fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);
        
        } 
    }
 );

 server.listen(3000,'127.0.0.1');