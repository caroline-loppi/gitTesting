var http = require("http"),
fs = require('fs');


http.createServer(function (request, response) {

	fs.readFile('html_simples.html', function(err, html) {
		if (err) console.log(err);
    	response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);   
   		response.end();
	});
	

}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');



