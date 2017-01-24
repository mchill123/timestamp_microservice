var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/:timestamp', function(req, res){
    var timestamp = req.params.timestamp;
    res.send('Timestamp: '+ timestamp);
    res.json(getTimestampJSON(timestamp));
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
    if(!isNAN(parseInt(timestamp))){
        date = new Date(parseInt(timestamp));
    }else{
        date = new Date(timestamp)
    }
    
    if(!isNAN(date.getTime())){
        
        result.unix = date.getTime();
        result.natural = 'in due time';
    }
    
    return result;
}