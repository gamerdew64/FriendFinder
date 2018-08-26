// =======================================================================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// =======================================================================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =======================================================================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// =======================================================================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Creating application/json parser
// Ultimately decided to comment this out (through line 26), as the bodyParser was just used in all the following app.use anyway. It seems redundant to keep.
// var jsonParser = bodyParser.json();

// Sets up the JSON parser
// app.use(bodyParser.json());

// Creating an application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// Pulled all three of the following app.use from the NPM JS site, under the "change accepted type for parsers" section
// These three parsers will accept a type option that allows you to change the content-type that middleware will parse.

// Parse various different custom JSON types as json
app.use(bodyParser.json({ type: 'application/*+json' }));

// Parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

// Parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// =======================================================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// =======================================================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =======================================================================================================================
// LISTENER
// The below code effectively "starts" our server
// =======================================================================================================================

app.listen(PORT, function() {
  // Making the output brighter, and adding different color to every word. Cause...priorities
  console.log("\x1b[1m","\x1b[34m","\n-------------------------------------------------\n" + "\x1b[30m","This" +"\x1b[31m","application" + "\x1b[32m","is" + "\x1b[33m","listening" + "\x1b[34m","on" + "\x1b[35m","PORT:" + "\x1b[36m", PORT + "\x1b[34m","\n-------------------------------------------------\n");
  // Resetting console formatting to default
  console.log("\x1b[0m");
});
