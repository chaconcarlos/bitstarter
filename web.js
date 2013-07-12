var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

//This is the app
app.get('/', function(request, response) {
 
  console.log("Reading file");
  fs.readFile('index.html','utf8', function (err, data) {
    if (err) response.send(err);
    //console.log(data);
    response.send(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
