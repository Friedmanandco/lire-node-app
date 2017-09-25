// node
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var fs = require("fs");
var request = require("request");
// external files 
var keys = require("./key.js");
var liriFunction = require("./liri_function.js");

var twitterName = "gcode4life1";
var twitterCount = 20;

var twitterNpm = keys.twitterKeys;

var client = new Twitter(twitterNpm);


  exports.TweetsFunction = function(service, param){

  //build query url..
  var queryUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+twitterName+"&count="+twitterCount;
  
  // Get the data from the twitter api
    client.get( queryUrl,  function(error, tweet, response) {
    // if(error)throw error;
     console.log(tweet);
  
    });

 }

  exports.SpotifyFunction = function(service, param){

    //set default song..
    var song = "uptown funk";
  
  //overwrite default song if necessary
  if(param != "*none provided*"){
    song = param;
  }

     var spotify = new SpotifyFunction({
        id: "4ff52907e9674fa493aaa7f59acf480a",
        secret: "1d2fb045b5454ff29d2a01dff3668833"
      });
 

      spotify
      .search({  type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback) }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
          else { }
      console.log(data); 
      };

   }

   // console.log(service);



  




exports.MovieFunction = function(service, param){
   console.log("OMDB Search Results:");
   var key = "40e9cece";
   var queryUrl = "http://www.omdbapi.com/?apikey="+key+"&t=Mr+Nobody";

   // if (param != "*none provided*"){
   //    movie = param;
   // }
    

      // queryUrl += movie;
   var request = require('request');
   request(queryUrl, function (error, response, body) {
      if(error != null){
         console.log('error:', error); // Print the error if one occurred 
      }
      else{

         var movie = JSON.parse(response.body);
         //console.log(movie);
         //console.log(response.body); // Print the response status code if a response was received 
         var titleString = "Title: " + movie.Title + "\r\n";
         var yearString = "Year: " + movie.Year + "\r\n";
         var ratedString = "Rated: " + movie.Rated + "\r\n"; 
         var genreString = "Genre: " + movie.Genre + "\r\n";
         var actorsString = "Actors: ";
         for(var i = 0; i < movie.Actors.length; i++){
            actorsString += movie.Actors[i];
         }
         actorsString += "\r\n";
         var plotString = "Plot: " + movie.Plot + "\r\n";
         console.log(titleString);
         console.log(yearString);
         console.log(ratedString);
         console.log(genreString);
         console.log(actorsString);
         console.log(plotString);

      }
   

});


}
exports.FromFileFunction = function(){

}