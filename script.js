
 function displayMovieInfo() {

   var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=ca57f8d195555909f808f10b7ae17e17"
  
   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function(response) {
  console.log(response)
  
   });

 }
 displayMovieInfo()