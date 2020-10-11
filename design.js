import 'Entries';
//Required Variables
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var port = "8000";

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Routes Definitions
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '../design.html'))
});

//Login Name Entered
app.post('/journal', function(request, response) {
    var journal = request.body.journal;
    var mood = request.body.mood;
    // console.log(`Hello `+username);
});

// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
   });