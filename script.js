let poster = ""
let score = 0
let correctMovie = ""
let incorrectMovie = ""
let movie = "" 
let movRandomArr = []
var numOfTurns = 0

function displayRandomGif(){


  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=SJgex9zQLzI4Jpbv0xiXHpX13uXElbTO&tag=cats&rating=pg";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function(response) {

      var imageUrl = response.data.images.original.url;

      var catImage = $("<img>");

      catImage.attr("src", imageUrl);
      catImage.attr("alt", "cat image");

      $(".modal-header").append(catImage);
    });
}

function displayMovieInfo() {
   
   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=ca57f8d195555909f808f10b7ae17e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
   fourUnique()
   
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function(response) {

    poster = response.results[movRandomArr[correctMovie]].backdrop_path
    var imageBox = $('<img>') 
    $('#poster').append(imageBox)
    imageBox.addClass("imagesq d-flex justify-content-center")
    imageBox.attr('src', "https://image.tmdb.org/t/p/w500/" + poster )
  
    let randomMovieOne = response.results[movRandomArr[0]];
    let randomMovieOneTitle = randomMovieOne.title

    $("#movie-1").text(randomMovieOneTitle)
    let randomMovieTwo = response.results[movRandomArr[1]];
    let randomMovieTwoTitle = randomMovieTwo.title
  
    $("#movie-2").text(randomMovieTwoTitle)

    let randomMovieThree = response.results[movRandomArr[2]];
    let randomMovieThreeTitle = randomMovieThree.title

    $("#movie-3").text(randomMovieThreeTitle)

    let randomMovieFour = response.results[movRandomArr[3]];
    let randomMovieFourTitle = randomMovieFour.title
    $("#movie-4").text(randomMovieFourTitle)

$('.btn').eq(correctMovie).addClass('correct')

   });

 }


function countTurns () {
}

function updateScore () {
  $('.score-count').text("Your score : " + score)
}

function displayScore(){
  var scoreParagraph = $('<p></p>') 
  $('#scoreboard').append(scoreParagraph)
  $(scoreParagraph).text("Your score : " + score).addClass('score-count')
}

function addButtons(){

  for (let index = 0; index < 4; index++) {
    var appbutton = $('<button></button>') 
    $('#buttons-section').append(appbutton)
    appbutton.attr('type', 'button')
    appbutton.attr('class', 'btn question-buttons btn-primary')

    var buttonnumber = index + 1
    appbutton.attr('id','movie-'+ buttonnumber)
    
  }

}

function wipeScreen(){
  $('#buttons-section').empty()
  $('#poster').empty()
  movRandomArr = []

  
}

function random20 (){
 return Math.floor(Math.random() * 20)
}

function fourUnique(){
    while (movRandomArr.length < 4 ) {
    var uniqueNum = random20()
    if(movRandomArr.indexOf(uniqueNum) === -1) movRandomArr.push(uniqueNum)
    
  }
}

function correctMovieChoice() {
  return Math.floor(Math.random() * 4)
}

correctMovie = correctMovieChoice() //assigning function to var that will be used in displayMovieInfo()

addButtons() //initial screen on load 
displayMovieInfo() //initial screen on load
displayScore() 

$(document).on('click', '.question-buttons', function(){/// checking the answer. Task: give the class a proper name

  if ($(this).hasClass("correct")){
    alert("correct");
    score++
  }
  else {
    alert("incorrect")
  }
  console.log('Your score:', score)
  wipeScreen()
  updateScore()
  numOfTurns++
  console.log(numOfTurns)
  
  if (numOfTurns == 3) {
  $('#game-section').hide()
  alert("It's over!")
  displayRandomGif() 
  $('.modal-body').text("Your score: " + score)
  $('#exampleModal').modal('show')

  localStorage.setItem(0, score)
  var finalScore = localStorage.key(0)
  console.log("saved score " + finalScore);
  $('#localstoresave').on('click', function(){
    var highscorelist = $('#highscore').html('<p></p>')
    highscorelist.text("final score = " + finalScore)
  }
    )}


 
  


   

   addButtons() // second loop load / render
  displayMovieInfo() // second loop load / render
} 
 )

 

 