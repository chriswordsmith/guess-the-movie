let poster = ""
let score = 0
let correctMovie = ""
let incorrectMovie = ""
let movie = ""
let movRandomArr = []
 function displayMovieInfo() {
   alert('populating movie info')
   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=ca57f8d195555909f808f10b7ae17e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
   fourUnique()
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





   });

 }

var numOfTurns = 0 
function checkingAnswer (){
    //check class of button, if correct then mark as correct and score++
  // if not correct then wrong alert
  $(document).on('click', '.btn', function(){

  
  if ($(this).hasClass("correct")){
    alert("correct");
    score++
    console.log(score)
  }
  else {
    alert("incorrect")
  }
  wipeScreen()
addButtons()
displayMovieInfo()
  

  // console.log(numOfTurns + " number of loopes")
  // numOfTurns++
  

 
}
 )
}





function displayScore(){
  var scoreP = $('<p></p>') 
  $('#scoreboard').append(scoreP)
  $(scoreP).text(score)

}



function addButtons(){
  alert("buttons activated")

  for (let index = 0; index < 4; index++) {
    var appbutton = $('<button></button>') 
    $('#buttons-section').append(appbutton)
    appbutton.attr('type', 'button')
    appbutton.attr('class', 'btn')
    var buttonnumber = index + 1
    appbutton.attr('id','movie-'+ buttonnumber)
    
  }

}

function wipeScreen(){
  $('#buttons-section').empty()
  $('#poster').empty()
  movRandomArr = []
  fourUnique()
  alert("screen wiped")
  
  
}


// LOCAL STORAGE HERE????

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

correctMovie = correctMovieChoice() //assigning  function to var that will be used in displayMovieInfo()


//initial screen on load 
addButtons()
displayMovieInfo()
checkingAnswer()



 displayScore()