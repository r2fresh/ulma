var express = require('express')
var path = require('path');
var app = express();

var http = require('http')

//app.set('views', path.join(__dirname, 'views'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/test', function(req, res) {

    console.log('call test')

})

app.use(express.static('public'));

app.listen(3000);
