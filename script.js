let poster = ""
let score = 0
let correctMovie = ""
let incorrectMovie = ""
let movie = ""
let movRandomArr = []
 function displayMovieInfo() {

   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=ca57f8d195555909f808f10b7ae17e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  
   // Creating an AJAX call for the specific movie button being clicked
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function(response) {

    poster = response.results[movRandomArr[correctMovie]].backdrop_path
    var imageBox = $('<img>') 
    $('#poster').append(imageBox)
    imageBox.addClass("imagesq")
    imageBox.attr('src', "https://image.tmdb.org/t/p/w500/" + poster )
  
    let randomMovieOne = response.results[movRandomArr[0]];
    let randomMovieOneTitle = randomMovieOne.title

    $("#movie-1").text(randomMovieOneTitle)
    //    $("#movie-1").html("<button>").text(randomMovieOneTitle) SOMETHING LIKE THAT??
    let randomMovieTwo = response.results[movRandomArr[1]];
    let randomMovieTwoTitle = randomMovieTwo.title
  
    $("#movie-2").text(randomMovieTwoTitle)

    let randomMovieThree = response.results[movRandomArr[2]];
    let randomMovieThreeTitle = randomMovieThree.title

    $("#movie-3").text(randomMovieThreeTitle)

    let randomMovieFour = response.results[movRandomArr[3]];
    let randomMovieFourTitle = randomMovieFour.title
    $("#movie-4").text(randomMovieFourTitle)

console.log(movRandomArr[correctMovie])
$('.btn').eq(correctMovie).addClass('correct')

// NEXT STEPS FOR WEDNESDAY
// REFRESH OF THE PAGE AFTER THE ATTEMPT
// LOCAL STORAGE
// WORK OUT LOGIC FOR REFRESHING THE SLIDE
// MODAL?
// LARGER SELECTION OF MOVIES
// TIMER?

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
  // let correctMovie = movie
  
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

// function addButtons(){
//   alert("buttons activated")
//   var appbutton = $('<button></button>') 
//    $('#buttons-section').append(appbutton)
//    appbutton.attr('type', 'button')
//    appbutton.attr('class', 'btn')
//    appbutton.text('test')
//   /*
//       <button type="button" id="movie-1" class="btn btn-primary">Movie 1</button>
// <button type="button" id="movie-2" class="btn btn-secondary correct">Movie 2</button>
// <button type="button" id="movie-3" class="btn btn-success">Movie 3</button>
// <button type="button" id="movie-4" class="btn btn-danger">Movie 4</button>
//   */
// }
// addButtons()

// function wipeScreen(){
//   $('#buttons-section').empty()
//   alert("screen wiped")
// }
//wipeScreen()
//  .if (condition) {
  
//  } else {
  
//  }

function random20 (){
 return Math.floor(Math.random() * 20)
}

function fourUnique(){
    while (movRandomArr.length < 4 ) {
    var uniqueNum = random20()
    if(movRandomArr.indexOf(uniqueNum) === -1) movRandomArr.push(uniqueNum)
    
  }

}
fourUnique()

function correctMovieChoice() {
  return Math.floor(Math.random() * 4)
}
correctMovie = correctMovieChoice()
console.log(movRandomArr[correctMovie])
console.log(movRandomArr)


// while(arr.length < 8){
//   var r = Math.floor(Math.random() * 100) + 1;
//   if(arr.indexOf(r) === -1) arr.push(r);