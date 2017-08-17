var spotify = require("node-spotify-api");
   
exports.TweetsFunction = function(){
   console.log("tweets");
   
}
exports.SpotifyFunction = function(){
   console.log("Spotify Search Results:");


   //spotify.something
}
exports.MovieFunction = function(){
   console.log("OMDB Search Results:");
   var key = "40e9cece";
   var queryUrl = "http://www.omdbapi.com/?apikey="+key+"&t=mr+nobody";

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