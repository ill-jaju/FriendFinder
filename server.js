var bodyParser = require('body-parser'); //dependencies
var express = require('express');
var path = require('path');

var app = express(); //tells node we are using an express server

var PORT = process.env.PORT || 8080; //sets initial port

app.use(bodyParser.json()); //bodyParser next four lines - standard copy/paste
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){ //makes sure app is working
    console.log("app on " + PORT);
});