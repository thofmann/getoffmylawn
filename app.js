var express = require('express');

var app = express();

var status = 'http://localhost:8080/0.jpg';

var previous;

var request = require('request');

setInterval(function(){
  request('https://dl.dropboxusercontent.com/u/24324081/source.txt', function (error, response, body) {
    if (previous != body){
      status = 'http://localhost:8080/1.jpg';
    }
    else{
      status = 'http://localhost:8080/0.jpg';
    }
    previous = body;
  });
}, 5000);

request('https://dl.dropboxusercontent.com/u/24324081/source.txt', function (error, response, body) {
  previous = body;
});

// Use 'views' as the directory for HTML views.
app.set('views', __dirname + '/views');

// Use Jade as the HTML view rendering engine.
app.set('view engine', 'jade');

// Render static files from the 'public' directory.
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/status', function(req, res){
  res.send(status);
});


app.listen(8080);