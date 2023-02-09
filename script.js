let poster = ""

 function displayMovieInfo() {

   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=ca57f8d195555909f808f10b7ae17e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  
   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function(response) {
  console.log(response)
  var movie = response.results[0]
    console.log(movie)
    poster = movie.backdrop_path
    var imageBox = $('<img>') 
    $('#poster').append(imageBox)
    imageBox.addClass("imagesq")
    imageBox.attr('src', "https://image.tmdb.org/t/p/original/" + poster )
    //$('#poster').append('<img></img>')

    //  var titleTd = $("<td>").text(response.Title);
 // var yearTd = $("<td>").text(response.Year);
 // var actorsTd = $("<td>").text(response.Actors);
    //$('#poster').attr('src', "https://image.tmdb.org/t/p/original/" + movie)
    //'<img src="/static/on.png" height="64px" width="64px">'
   });

 }
 displayMovieInfo()