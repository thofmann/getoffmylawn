var express = require('express');

var app = express();

var status = 'http://localhost:8080/0.jpg';

setInterval(function(){
  //status = getStatusFromScanalytics();
}, 250);

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

app.listen(1337);