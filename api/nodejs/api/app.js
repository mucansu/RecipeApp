var express = require('express');
var app = express();
var fs = require("fs");

app.get('/nodejs', function (req, res) {
   res.end("Hello from nodejs!");
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})