var finalScore = document.getElementById("finalScore");
var saveScore = document.getElementById("saveScore");
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var highScoresList = document.getElementById("highScoresList");
var clearScoreBtn = document.getElementById("clearScoreBtn");

//Get the score from local storage and display
var recentScore = JSON.parse(localStorage.getItem("highScore"));
finalScore.innerHTML ="Score:" + recentScore;

saveScoreBtn.addEventListener("click", function(event) {
  saveScoreBtn.disabled = "click";
  event.preventDefault();
// https://medium.com/better-programming/how-to-use-local-storage-with-javascript-9598834c8b72
 var score= {
    score: recentScore,
    name: username.value
  }
  let scores;
  if(localStorage.getItem("scores") === null){
    scores = [];
  } else{
    scores = JSON.parse(localStorage.getItem("scores"));
  }
  scores.push(score);
  localStorage.setItem("scores", JSON.stringify(scores));
  username.value= "";

  //Hide the submit button
  if (saveScoreBtn.style.display === "none"){
    saveScoreBtn.style.display = "block";
  }else{
    saveScoreBtn.style.display = "none";
  }

// Get the score with user name from local storage

var highScores = JSON.parse(localStorage.getItem("scores"));
console.log(highScores)
for (var i = 0; i < highScores.length; i++) {
  var usernameEl = highScores[i].name;
  console.log(usernameEl)
  var scoreEl = highScores[i].score;
  console.log(scoreEl)
var li = document.createElement("li");
li.textContent= usernameEl + "  " + scoreEl;
highScoresList.appendChild(li)

}});

//Clear local storage
clearScoreBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.localStorage.clear();
 location.reload();
});




