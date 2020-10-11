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
    response.sendFile(path.join(__dirname + '/login.html'))
});

//Login Name Entered
app.post('/auth', function(request, response) {
	var username = request.body.username;
    console.log(`Hello `+username);
});

// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
   });