var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public')); //__dir and not _dir

var PORT = 8080; // you can use any port  


app.listen(PORT);
console.log('listening to...' + PORT);


