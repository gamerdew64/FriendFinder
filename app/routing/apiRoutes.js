// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

  // We are capturing the body of the user's input and putting in into an object
  var userData = req.body;

  // This was moreso done for testing purposes, but logging the stringified JSON userData to the console. This contains the name, photo and scores.
  console.log('userData = ' + JSON.stringify(userData));

  // We are capturing the scores from the above captured userData and assigning it to a new variable called userScores
  var userScores = userData.scores;

  //Logging the scores that the user entered into the console.
  console.log('userScores = ' + userScores);

  // Creating a new variable and assigning it to an empty string, as this will be our matching friend's name
  var matchingUserName = '';
  // Creating a new variable and assigning it to an empty string, as this will be our matching friend's associated image/profile picture
  var matchingUserImg = '';
  // Make the initial value big for comparison - the point is that this number is so large that it can never be exceeded. This will function as the TOTAL difference.
  var totalDifference = 10000;

  // This is where it gets pretty intense. There is a for loop nestled inside another for loop.
  // This for loop examines all of the existing friends in the list, and goes through the entire length of the friends array.
  for (var i = 0; i < friends.length; i++) {
    // This was added for testing purposes. It will output each index in the friends array to the console.
    // console.log('friend = ' + JSON.stringify(friends[i]));

    // This variable will compute the differences for EACH question (not total difference)
    var questionDifference = 0;
    // This for loop goes through the length of the userScores and assigns the absolute value (which I don't believe we have discussed as of yet) of the friend scores minus the user scores to the quesitonDifference variable.
    for (var j = 0; j < userScores.length; j++) {
      questionDifference += Math.abs(friends[i].scores[j] - userScores[j]);
    }
    // This was added for testing purposes, to make sure that the difference was logging correctly. It will be commented out for now.
    // console.log('questionDifference = ' + questionDifference);

    // If the questionDifference is less than the totalDifference, display the friend match (difference number, friend name and friend image) to the console.
    if (questionDifference < totalDifference) {
      console.log('Closest match found = ' + questionDifference);
      console.log('Friend name = ' + friends[i].name);
      console.log('Friend image = ' + friends[i].photo);

      // Assigning the matchingUserName to the name property for every friends index in the array. This will be referenced when we print the information to the end user on the survey.html page.
      matchingUserName = friends[i].name;
      // Assigning the matchingUserName to the photo property for every friends index in the array. This will be referenced when we print the information to the end user on the survey.html page.
      matchingUserImg = friends[i].photo;
      // Assigning the total difference to the question difference, making them equal.
      totalDifference = questionDifference;
    }
  }

  // Pushing the userData into friends, thus adding a new friend in the array
  friends.push(userData);

  // Sending JSON response composed of a stringified version of the specified data
  res.json({status: 'OK', matchingUserName: matchingUserName, matchingUserImg: matchingUserImg});

  // ---------------------------------------------------------------------------
  // This code was added so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friends = [];
  //   console.log(friends);

  });
};
