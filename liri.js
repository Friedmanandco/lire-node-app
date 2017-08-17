
   var service = process.argv[2];
   var param = process.argv[3]; 

   var spotify = require("node-spotify-api");
   
   // name of the srvice liri can do 
   var liriService =["my-tweets","spotify-this-song","movie-this","do-what-it-says"];

   var TweetsFunction = function(){
      console.log("Here are your last 20 tweets:");
   }
   var SpotifyFunction = function(){
      console.log("Spotify Search Results:");
   }
   var MovieFunction = function(){
      console.log("OMDB Search Results:");
   }
   var FromFileFunction = function(){

   }

   console.log("Input: ");
   console.log("Service: " + service);
   console.log("Parameter: " + param+"\r\n");
   

   // set function of liri service service
   if (liriService.includes(service)) {

		// todo 
		if(service == "my-tweets"){
         TweetsFunction();
      }
      else if(service == "spotify-this-song"){
         SpotifyFunction();

      }
      else if(service == "movie-this"){
         MovieFunction();

      }
      else if(service == "do-what-it-says"){
         FromFileFunction();
      }
      
   }

	else {
		console.log("Invalid Command: '" + service + "'");
      console.log("Try one of these commands:");
      //create a for loop
      //for each item in liriService, 
      for(var i = 0; i < liriService.length; i++){
         console.log(liriService[i]+" ");
      }
      //console.log
	}
