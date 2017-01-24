var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('HELLO WORLD!!!!');
    
});

app.listen(PORT, function(){
    console.log('server is listening on port ' + PORT);
});