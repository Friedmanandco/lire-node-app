
   var service = process.argv[2];
   var param = process.argv[3]; 

   var liri_function = require("./liri_function.js");
   
   // name of the srvice liri can do 
   var liriService =["my-tweets","spotify-this-song","movie-this","do-what-it-says"];

   

   console.log("Input: ");
   console.log("Service: " + service);
   console.log("Parameter: " + param+"\r\n");
   

   // set function of liri service service
   if (liriService.includes(service)) {

		// todo 
		if(service == "my-tweets"){
         liri_function.TweetsFunction();
      }
      else if(service == "spotify-this-song"){
         liri_function.SpotifyFunction();

      }
      else if(service == "movie-this"){
         liri_function.MovieFunction();

      }
      else if(service == "do-what-it-says"){
         liri_function.FromFileFunction();
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
