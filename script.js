//Set up the variables.
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var startQuiz = document.getElementById("start");
var scoreEl = document.getElementById("myHighScore");
var time = 60;
var countDown;
var currentIndex = 0;
var highScore = 0;

//Set up questions.
var questions = [{
    //Question 1
    question: "What is JavaScript?",
    answer: ["Object oriented programming language", "Aplication", "Hypertext markup language", "Style sheet language"],
    correct: "Object oriented programming language",
}, {
    //Qusetion 2    
    question: "Which software company developed JavaScript?",
    answer: ["Mozilla", "Netscape", "Sun Microsystem", "Oracle"],
    correct: "Netscape",
}, {
    //Question 3
    question: "How does JavaScript store dates in a date object?",
    answer: ["The number of miliseconds since January 1st, 1970", "The number of days since January 1st, 1900", "The number of seconds since Netscape's public stock offering", "None of the above"],
    correct: "The number of miliseconds since January 1st, 1970",
}, {
    //Question 4
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: "<script>",
}, {
    //Queston 5
    question: "Which of the following are capabilities of functions in JavaScript?",
    answer: [" Return a value", "Accept parameters and Return a value", "Accept parameters", "None of the above"],
    correct: "Accept parameters",
}];
// Set up the timer.
function timer(){
    time--;
    timerEl.textContent = "Time:" + time;
    if (time <= 0) {
        time = 0;
        timerEl.textContent ="Time:" + time;
        timeUp();
    }
}
//Start the time, hide the button
startQuiz.addEventListener("click", function() {
    document.getElementById("start").style.visibility="hidden";
    countDown = setInterval(timer, 1000);

    nextQuestion();
});

function nextQuestion(){
    var currentQuestion = questions[currentIndex].question;
    questionEl.textContent= currentQuestion;
    answerEl.innerHTML= "";
    for (var i = 0; i < questions[currentIndex].answer.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("class", "btn");
        button.setAttribute("value", questions[currentIndex].answer[i]);
        button.textContent = questions[currentIndex].answer[i];
        button.onclick = answer;
        answerEl.append(button);
    }
}

function answer() {
    if (this.value === questions[currentIndex].correct) {
        time += 5;
        // add to high score value
        highScore += 20;
         
    } else {
        time -= 5;
        timerEl.textContent = "Time:" + time;
        
    }
    currentIndex++;
    if (currentIndex === questions.length) {
        timeUp();
        
    } else {
        nextQuestion();
    } 
    //Display score
    scoreEl.innerHTML ="Score:" + highScore;
    console.log(highScore);
}

 //clear execution 
 function timeUp(){
    //Cler interval move to next html
    clearInterval(countDown);

    //part 2, using local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));
    window.location.href="score.html";
}


