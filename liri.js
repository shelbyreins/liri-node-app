require("dotenv").config();

var options = process.argv[2];
var userInput = process.argv[3];

var keys = require("./keys.js");

var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs")
var moment = require("moment");

Inputs(options, userInput);

function Inputs(options, userInput) {
  switch (options) {
    case "concert-this":
      concert(userInput);
      break;

    case "spotify-this-song":
      spotify(userInput);

    case "movie-this":
      movie(userInput);

    case "do-what-it-says":
      doWhatItSays(userInputs);
    
    default:
    console.log("Use one of these commands concert-this, spotify-this, movie-this or do-what-it-says");
  }
}

function concert(userInput) {

  var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(
    function (response) {
      var events = response.data
      for (var i = 0; i < events.length; i++) {

        console.log("----- Event -----")
        console.log("Venue: " + events[i].venue.name)
        console.log("Location: " + events[i].venue.city)
        console.log("Date: " + moment(events[i].datetime).format("MM/DD/YYYY"))
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function spotify(userInput) {
  if (userInput === undefined) {
    userInput = "The Sign"
  }
  var spotify = new Spotify(keys.Spotify);
  spotify.search({ type: 'track', query: userInput }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var song = data.tracks.items;
    for (var i = 0; i < song.length; i++) {
      console.log("----- Song -----")
      console.log("Song Name: " + song[i].name);
      console.log("Artist(s): " + song[i].artists[0].name);
      console.log("Album: " + song[i].album.name);
      console.log("Preview Link: " + song[i].preview_url);

    }

  }
  );

}

function movie(userInput) {
  if (userInput === undefined) {
    userInput = "Mr.Nobody"
    console.log("-----------")
    console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!")
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&apikey=d540fc7e";

  axios.get(queryUrl).then(
    function (response) {
      console.log("----- Movie -----");
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMBD Rating: " + response.data.imdbRating);
      console.log("Country of Production: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      //Rotten Tomatoes

    })
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf-8", function (err, data) {
    if (err) {
      return console.log(err)
    }
    var dataArr = data.split(",");
    Inputs(dataArr[0], dataArr[1]);
  })
}