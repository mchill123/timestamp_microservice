var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;



app.get('/:timestamp', function(req, res){
    var timestamp = req.params.timestamp;
    res.json(getTimestampJSON(timestamp));
});
    
app.get('/', function(req,res){
    var filename = path.join(__dirname, 'index.html')
    res.sendFile(filename);
});

app.listen(PORT, function(){
    console.log('server is listening on port ' + PORT);
});

function getTimestampJSON(timestamp){
    var result = {
        unix: null,
        natural: null
    };
    
    var date;
    if(!isNaN(parseInt(timestamp))){
        date = new Date(parseInt(timestamp));
    }else{
        date = new Date(timestamp);
    }
    
    if(!isNaN(date.getTime())){
        
        result.unix = date.getTime();
        result.natural = getNaturalDate(date);
    }
    
    return result;
}

function getNaturalDate(date){
    var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return months[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
    
}