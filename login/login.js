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

//Kim's edits start here
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '../SummaryPage.html')) //so it pull up the summary page here
    var button = request.body.submit;	//summary page has a button which is supposed to redirect to design.html
	app.get('/', function(request, response) { 
	    username = request.body.username; //pull up the page design.html
	    response.sendFile(path.join(__dirname + '../design.html'))
	});
});

app.post('/journal', function(request, response) {
    var journal = request.body.journal;
    var mood = request.body.mood;
    var date = request.body.date;

    Entries(username, date, journal, mood); 
    Post(date, journal, username);
    // console.log(`Hello `+username);
});
//Kim's edits end here

// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
   });
