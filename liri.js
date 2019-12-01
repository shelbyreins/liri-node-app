//  require("dotenv").config();

// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.Spotify);
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data.tracks.items); 
//   });


 
 


// var axios = require("axios");
// var nodeArgs = process.argv;
// var movieName = "";
// for (var i = 2; i < nodeArgs.length; i ++){
//     if(i > 2 && i < nodeArgs.length){
//         movieName = movieName + "+" + nodeArgs[i];
//     }else{
//         movieName += nodeArgs[i];
//     }
// }

// var queryUrl = "http://www.omdbapi.com/?t="+ movieName + "&apikey=d540fc7e";

// console.log(queryUrl);

// axios.get(queryUrl).then(
//     function(response){
//         console.log(response.data)
//     })
//     .catch(function(error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.log("---------------Data---------------");
//           console.log(error.response.data);
//           console.log("---------------Status---------------");
//           console.log(error.response.status);
//           console.log("---------------Status---------------");
//           console.log(error.response.headers);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an object that comes back with details pertaining to the error that occurred.
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log("Error", error.message);
//         }
//         console.log(error.config);
//       });

