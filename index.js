var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
      fs.readFile('./index.html', 'utf8', (err, data) => {
		  if (err) throw err;
		  response.write('<p>' + data + '<p>');
		});
       
    } else {
            
            //response.write("<img src='http://localhost:9000/images/404.png' alt='error404'>");
            fs.readFile('./images/404.png',(err, data) => {
			  if (err) throw err;
				  response.statusCode = 404;
	              response.setHeader("Content-Type", 'image/jpg');
				  response.write(data);
		   		  response.end();
			});
           
    }
});

server.listen(9000);