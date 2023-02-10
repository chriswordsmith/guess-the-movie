let poster = ""

let correctMovie = ""
let incorrectMovie = ""


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
  
    $("#movie-1").text(movie.title)
    
    let randomMovieTwo = response.results[Math.floor(Math.random() * 20)];
    let randomMovieTwoTitle = randomMovieTwo.title
  
    $("#movie-2").text(randomMovieTwoTitle)

    let randomMovieThree = response.results[Math.floor(Math.random() * 20)];
    let randomMovieThreeTitle = randomMovieThree.title

    $("#movie-3").text(randomMovieThreeTitle)

    let randomMovieFour = response.results[Math.floor(Math.random() * 20)];
    let randomMovieFourTitle = randomMovieFour.title
    $("#movie-4").text(randomMovieFourTitle)

// we'll need a bigger selection of movies AND do an operator for strict equality

// randomising the button choices

// logic of which movie number / button is correct 

// on.("click") 

// if buttonnumber === correctMovie, score++
// else alert WRONG



   });

 }
 displayMovieInfo()

//  // 
//  function name() {
  
//  }


//  .if (condition) {
  
//  } else {
  
//  }


//  Math.random()
