// Let's make a quiz! About JavaScript!

// Let's make some variables!
var secondsLeft = 75;
// this will advance the game
var click = 0;
// these are the correct answers in variable form
var correct1 = {
    answer1: questions[0].answer,
    answer2: questions[1].answer,
    answer3: questions[2].answer,
    answer4: questions[3].answer,
    answer5: questions[4].answer
}

var correct2 = {
    answer1: questions2[0].answer,
    answer2: questions2[1].answer,
    answer3: questions2[2].answer,
    answer4: questions2[3].answer,
    answer5: questions2[4].answer
}

// undefined (for now) variables
var score;
var userChoice;
var playerName;
var playerScore;

// element makers 
var divEl = document.createElement("div")


// element grabbers
var startbtn = document.querySelector("#startbtn"); 
var title = document.querySelector(".title"); 
var h1El = document.querySelector("h1"); 
var container = document.querySelector(".container");
var rainbow = document.querySelector("#rainbow1");
var scorebox = document.querySelector(".scorebox");
var highbtn = document.querySelector("#highbtn");
var scorediv = document.querySelector("#score");
var highscore = document.querySelector("#highscore");

// local storage
var prevPlayer = localStorage.getItem("PlayerName");
var prevScore = localStorage.getItem("PlayerScore");
renderLastRegistered();

function renderLastRegistered(){
    if (prevPlayer === null || prevScore === null) {
        return;
    }
    
    else {
        document.querySelector("#highscore").textContent = prevPlayer + ": " + prevScore;
    }
}

// this watches for clicks on the 'high score' button and displays the hidden element
highbtn.addEventListener("click", function (event){
    event.stopPropagation();
    renderLastRegistered();
    if (highscore.getAttribute("style") === "display: block;") {
        document.querySelector("#highscore").setAttribute("style", "display: none;")
    }
    else {
        document.querySelector("#highscore").setAttribute("style", "display: block;")
    }
});

// if you click on the correct answer you get this sound
function correctSound() {
    let sound = document.querySelector("#audiocorrect");
    sound.play();
}
// if you click on a wrong answer you get this sound
function incorrectSound() {
    let sound = document.querySelector("#audiowrong");
    sound.play();
}

// the main event! this makes the car go
function playGame(event) {
    event.stopPropagation();

    // then remove the rainbow container with the start quiz button
    container.removeChild(rainbow);   
    h1El.textContent = "Choose Your Quiz!" 
    container.appendChild(document.createElement("button")).id = "jsquizbtn";
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("button")).id = "gertiequizbtn";
    document.querySelector("#jsquizbtn").textContent = "JavaScript Quiz";
    document.querySelector("#gertiequizbtn").textContent = "Gertie Quiz";

    document.querySelector("#jsquizbtn").addEventListener("click", function(event) {
        event.stopPropagation();
        score = 0;
        
        var interval = setInterval(function(){
            secondsLeft--;
            document.querySelector("#count").textContent = "Time Left: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(interval);
                // console.log("GAME OVER!");
                h1El.textContent = "GAME OVER!";
                var buttonId = ["#btn1", "#btn2", "#btn3", "#btn4"];
                for (var i = 0; i < buttonId.length; i++) {
                    container.removeChild(document.querySelector(buttonId[i]))
                }
                document.querySelector("#count").textContent = "Seconds Left: 0";
                document.querySelector("#score").textContent = "Your score:" + score;
                
                container.appendChild(divEl).id = "restart";
                document.querySelector("#restart").className = "choicebtn"
                document.querySelector("#restart").textContent = "Play Again?";
                document.querySelector("#restart").addEventListener("click", function(event){
                    userChoice = null;
                    event.stopPropagation();
                    location.reload();
                });
                // did this to allow the GAME OVER screen (including final score) to load before the alert pops up
                setTimeout(function() {
                    playerName = prompt("Enter your initials to save your score!");
                    playerScore = score;
                    localStorage.setItem("PlayerName", playerName);
                    localStorage.setItem("PlayerScore", playerScore);
                    renderLastRegistered();
                    
                }, 500);
            }
        }, 1000);
        
    
        // rewrite the html to give us questions[0]
        h1El.textContent = questions[0].title;
        h1El.id = "h1El"
        container.removeChild(document.querySelector("#jsquizbtn"));
        container.removeChild(document.querySelector("#gertiequizbtn"));


        // then add all the new content somehow from the question array
        
        
        for (let i = 0; i < questions[0].choices.length; i++) {
            var buttonEl = document.createElement("button");
            var buttonId = ["btn1", "btn2", "btn3", "btn4"]
            buttonEl.id = buttonId[i]
            buttonEl.className = "choicebtn"
            buttonEl.textContent = questions[0].choices[i]
            container.appendChild(buttonEl);
        }
        
        title.appendChild(divEl).id = "count";
    
    
        // Next an eventListener for div clicks
        container.addEventListener("click", function(event){
            event.stopPropagation();
            console.log(event);
            userChoice = event.target.textContent;
            if (event.target.matches(".choicebtn")) {
    
                click++;
                console.log(click)
                var buttonId = ["#btn1", "#btn2", "#btn3", "#btn4"]
                /* using ++ to advance 'click' every time the click event happens I can shuffle 
                 through the question sets. This took a lot of trial and error to arrive at */
                    if (click === 1){
                    h1El.textContent = questions[click].title;
                    for (var i = 0; i < questions[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions[click].choices[i]
                    }
                    
                }
                    if (click === 2){
                    h1El.textContent = questions[click].title;
                    for (var i = 0; i < questions[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions[click].choices[i]
                    }
                }
                    if (click === 3){
                    h1El.textContent = questions[click].title;
                    for (var i = 0; i < questions[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions[click].choices[i]
                    }
                }
                    if (click === 4){
                    h1El.textContent = questions[click].title;
                    for (var i = 0; i < questions[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions[click].choices[i]
                    }
                }
    
                    if (click > 4) {
                    h1El.textContent = "GAME OVER!"
                    for (var i = 0; i < buttonId.length; i++) {
                    container.removeChild(document.querySelector(buttonId[i]));
                    }
                    
                    document.querySelector("#count").textContent = "Seconds Left: 0";
                    document.querySelector("#score").textContent = "Your score:" + score;
                    clearInterval(interval);
                    container.appendChild(document.createElement("button")).id = "restart";
                    document.querySelector("#restart").className = "choicebtn"
                    document.querySelector("#restart").textContent = "Play Again?";
                    document.querySelector("#restart").addEventListener("click", function(event){
                        event.stopPropagation();
                        userChoice = null;
                        location.reload();
                    });
    
                    setTimeout(function () {
                        playerName = prompt("Enter your initials to save your score!");
                        playerScore = score;
                        localStorage.setItem("PlayerName", playerName);
                        localStorage.setItem("PlayerScore", playerScore);
                        renderLastRegistered();
                        
                    }, 500);
                }
    
    
                if (userChoice === correct1.answer1 || userChoice === correct1.answer2 || userChoice === correct1.answer3 || userChoice === correct1.answer4 || userChoice === correct1.answer5) {
                    score = score + 20;
                    correctSound();
                    console.log("correct! you chose", userChoice);
                    console.log("score: ", score);
                    scorediv.textContent = "Your Score:" + score;
                    return score;
                }

                if (userChoice === null) {
                    return;
                }
                
                else {
                    console.log("worng!")
                    score = score - 10;
                    incorrectSound();
                    console.log("score: ", score);
                    secondsLeft = secondsLeft - 5;
                    console.log("seconds left: ", secondsLeft);
                    scorediv.textContent = "Your Score:" + score;
                    return score;
                }            
            }
        })    
        scorediv.textContent = "Your Score:" + score;
        
    })

    document.querySelector("#gertiequizbtn").addEventListener("click", function(event) {
        event.stopPropagation();
        score = 0;
        
        var interval = setInterval(function(){
            secondsLeft--;
            document.querySelector("#count").textContent = "Time Left: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(interval);
                // console.log("GAME OVER!");
                h1El.textContent = "GAME OVER!"
                var buttonId = ["#btn1", "#btn2", "#btn3", "#btn4"]
                for (var i = 0; i < buttonId.length; i++) {
                    container.removeChild(document.querySelector(buttonId[i]))
                }
                document.querySelector("#count").textContent = "Seconds Left: 0";
                document.querySelector("#score").textContent = "Your score:" + score;
                
                container.appendChild(divEl).id = "restart";
                document.querySelector("#restart").className = "choicebtn"
                document.querySelector("#restart").textContent = "Play Again?";
                document.querySelector("#restart").addEventListener("click", function(event){
                    event.stopPropagation();
                    location.reload();
                });
                // did this to allow the GAME OVER screen (including final score) to load before the alert pops up
                setTimeout(function() {
                    playerName = prompt("Enter your initials to save your score!");
                    playerScore = score;
                    localStorage.setItem("PlayerName", playerName);
                    localStorage.setItem("PlayerScore", playerScore);
                    renderLastRegistered();
                    
                }, 500);
            }
        }, 1000);
        
    
        // rewrite the html to give us questions[0]
        h1El.textContent = questions2[0].title;
        h1El.id = "h1El"
        container.removeChild(document.querySelector("#jsquizbtn"));
        container.removeChild(document.querySelector("#gertiequizbtn"));


        // then add all the new content somehow from the question array
        
        
        for (let i = 0; i < questions2[0].choices.length; i++) {
            var buttonEl = document.createElement("button");
            var buttonId = ["btn1", "btn2", "btn3", "btn4"]
            buttonEl.id = buttonId[i]
            buttonEl.className = "choicebtn"
            buttonEl.textContent = questions2[0].choices[i]
            container.appendChild(buttonEl);
        }
        
        title.appendChild(divEl).id = "count";
    
    
        // Next an eventListener for div clicks
        container.addEventListener("click", function(event){
            event.stopPropagation();
            console.log(event);
            userChoice = event.target.textContent;
            if (event.target.matches(".choicebtn")) {
    
                click++;
                console.log(click)
                var buttonId = ["#btn1", "#btn2", "#btn3", "#btn4"]
                /* using ++ to advance 'click' every time the click event happens I can shuffle 
                 through the question sets. This took a lot of trial and error to arrive at */
                    if (click === 1){
                    h1El.textContent = questions2[click].title;
                    for (var i = 0; i < questions2[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions2[click].choices[i]
                    }
                    
                }
                    if (click === 2){
                    h1El.textContent = questions2[click].title;
                    for (var i = 0; i < questions2[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions2[click].choices[i]
                    }
                }
                    if (click === 3){
                    h1El.textContent = questions2[click].title;
                    for (var i = 0; i < questions2[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions2[click].choices[i]
                    }
                }
                    if (click === 4){
                    h1El.textContent = questions2[click].title;
                    for (var i = 0; i < questions2[click].choices.length; i++) {
                        document.querySelector(buttonId[i]).textContent = questions2[click].choices[i]
                    }
                }
    
                    if (click > 4) {
                    h1El.textContent = "GAME OVER!"
                    for (var i = 0; i < buttonId.length; i++) {
                    container.removeChild(document.querySelector(buttonId[i]));
                    }
                    
                    document.querySelector("#count").textContent = "Seconds Left: 0";
                    document.querySelector("#score").textContent = "Your score:" + score;
                    clearInterval(interval);
                    container.appendChild(document.createElement("button")).id = "restart";
                    document.querySelector("#restart").className = "choicebtn"
                    document.querySelector("#restart").textContent = "Play Again?";
                    document.querySelector("#restart").addEventListener("click", function(event){
                        event.stopPropagation();
                        location.reload();
                    });
    
                    setTimeout(function () {
                        playerName = prompt("Enter your initials to save your score!");
                        playerScore = score;
                        localStorage.setItem("PlayerName", playerName);
                        localStorage.setItem("PlayerScore", playerScore);
                        renderLastRegistered();
                        
                    }, 500);
                }
    
    
                if (userChoice === correct2.answer1 || userChoice === correct2.answer2 || userChoice === correct2.answer3 || userChoice === correct2.answer4 || userChoice === correct2.answer5) {
                    score = score + 20;
                    correctSound();
                    console.log("correct! you chose", userChoice);
                    console.log("score: ", score);
                    scorediv.textContent = "Your Score:" + score;
                    return score;
                }
                
                else {
                    console.log("worng!")
                    score = score - 10;
                    incorrectSound();
                    console.log("score: ", score);
                    secondsLeft = secondsLeft - 5;
                    console.log("seconds left: ", secondsLeft);
                    scorediv.textContent = "Your Score:" + score;
                    return score;
                }            
            }
        })    
        scorediv.textContent = "Your Score:" + score;
    })

}

startbtn.addEventListener("click", playGame);



