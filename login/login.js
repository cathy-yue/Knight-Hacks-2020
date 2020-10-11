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
app.use("/scripts", express.static(__dirname + '/../'));
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

    response.redirect('/summary')
});

//Kim's edits start here
app.get('/summary', function(request, response) {
    response.sendFile(path.join(__dirname + '/../SummaryPage.html')) //so it pull up the summary page here
});

app.post('/summary', function(request, response) {
    response.sendFile(path.join(__dirname + '/../design.html')) //so it pull up the summary page here
});

app.post('/journal', function(request, response) {
    var journal = request.body.journal;
    var mood = request.body.mood;
    var date = request.body.date;

    Entries(username, date, journal, mood); 
    Post(date, journal, username);
    
});
//Kim's edits end here

// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
   });
