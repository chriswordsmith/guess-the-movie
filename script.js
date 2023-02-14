let poster = ""
let score = 0
let correctMovie = ""
let incorrectMovie = ""
let movie = ""

 function displayMovieInfo() {

   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=ca57f8d195555909f808f10b7ae17e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  
   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function(response) {
  console.log(response)
  movie = response.results[0]
    console.log(movie)
    poster = movie.backdrop_path
    var imageBox = $('<img>') 
    $('#poster').append(imageBox)
    imageBox.addClass("imagesq")
    imageBox.attr('src', "https://image.tmdb.org/t/p/w500/" + poster )
  
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
    wipeScreen()
// we'll need a bigger selection of movies AND do an operator for strict equality

// randomising the button choices

// logic of which movie number / button is correct 

// on.("click") 

// if buttonnumber === correctMovie, score++
// else alert WRONG



   });

 }


 displayMovieInfo()
function checkingAnswer (){
 $(".btn").on("click", function(){
  //alert("button lcik")
  let correctMovie = movie
  console.log($(this))
  if ($(this).hasClass("correct")){
    alert("correct");
    score++
    console.log(score)
  }
  else {
    alert("incorrect")
  }
  //check class of button, if correct then mark as correct and score++
  // if not correct then wrong alert
 }
 )


}
checkingAnswer ()
function displayScore(){
  var scoreP = $('<p></p>') 
  $('#scoreboard').append(scoreP)
  $(scoreP).text(score)
}
displayScore() // needs to be in clear board function to make sure it updates correctly 
//  // 
//  function name() {
  
//  }

function addButtons(){
  alert("buttons activated")
  var appbutton = $('<button></button>') 
   $('#buttons-section').append(appbutton)
   appbutton.attr('type', 'button')
   appbutton.attr('class', 'btn')
   appbutton.text('test')
  /*
      <button type="button" id="movie-1" class="btn btn-primary">Movie 1</button>
<button type="button" id="movie-2" class="btn btn-secondary correct">Movie 2</button>
<button type="button" id="movie-3" class="btn btn-success">Movie 3</button>
<button type="button" id="movie-4" class="btn btn-danger">Movie 4</button>
  */
}
addButtons()

function wipeScreen(){
  $('#buttons-section').innerhtml = ""
  alert("screen wiped")
}
wipeScreen()
//  .if (condition) {
  
//  } else {
  
//  }


//  Math.random()
